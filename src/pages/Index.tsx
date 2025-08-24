import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { FilterChips } from '@/components/FilterChips';
import { FundTable } from '@/components/FundTable';
import { useFunds } from '@/hooks/useFunds';
import { parseNaturalLanguageQuery, getActiveFilters } from '@/utils/searchParser';
import { SearchFilters } from '@/types/fund';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const { funds, loading, error } = useFunds(filters);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const parsedFilters = parseNaturalLanguageQuery(query);
    setFilters(parsedFilters);
  };

  const handleRemoveFilter = (key: string) => {
    const newFilters = { ...filters };
    delete newFilters[key as keyof SearchFilters];
    setFilters(newFilters);
    
    // Clear search query if removing all filters
    if (Object.keys(newFilters).length === 0) {
      setSearchQuery('');
    }
  };

  const activeFilters = getActiveFilters(filters);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Aberdeen Fund Centre</h1>
              <p className="text-sm text-muted-foreground">Natural Language Query Demo</p>
            </div>
            <Link to="/admin">
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="h-4 w-4" />
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Description Section */}
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-foreground">Natural Language Fund Search</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                This web app is a natural-language search tool for exploring a small sample of Aberdeen Investment funds.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border max-w-4xl mx-auto">
              <p className="text-muted-foreground mb-4">
                Users can type queries in plain English, like:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <code className="bg-muted px-2 py-1 rounded">"oeic multi asset"</code>
                <code className="bg-muted px-2 py-1 rounded">"unit linked fixed income"</code>
                <code className="bg-muted px-2 py-1 rounded">"sicav active equity"</code>
                <code className="bg-muted px-2 py-1 rounded">"icav quantitative"</code>
              </div>
              <p className="text-muted-foreground mt-4">
                or directly enter an ISIN code. The app returns matching funds with key details and Factsheet buttons to view official PDFs.
              </p>
            </div>
          </div>

          {/* Search Section */}
          <div className="text-center space-y-6">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Try 'oeic multi asset', 'unit linked fixed income', or an ISIN code..."
            />
          </div>

          {/* Filter Chips */}
          <FilterChips filters={activeFilters} onRemoveFilter={handleRemoveFilter} />

          {/* Results */}
          {loading && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading funds...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-8">
              <p className="text-red-600">Error: {error}</p>
            </div>
          )}
          {!loading && !error && <FundTable funds={funds} />}
        </div>
      </main>
    </div>
  );
};

export default Index;
