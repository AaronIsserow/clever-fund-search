import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { FilterChips } from '@/components/FilterChips';
import { FundTable } from '@/components/FundTable';
import { seedFunds } from '@/data/funds';
import { parseNaturalLanguageQuery, getActiveFilters } from '@/utils/searchParser';
import { Fund, SearchFilters } from '@/types/fund';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});

  const filteredFunds = useMemo(() => {
    let funds: Fund[] = seedFunds;

    if (filters.isin) {
      funds = funds.filter(fund => fund.isin === filters.isin);
    } else {
      if (filters.productType) {
        funds = funds.filter(fund => fund.productType === filters.productType);
      }
      if (filters.assetClass) {
        funds = funds.filter(fund => fund.assetClass === filters.assetClass);
      }
    }

    return funds;
  }, [filters]);

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
          {/* Search Section */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-foreground">Find Your Perfect Fund</h2>
              <p className="text-muted-foreground">
                Search using natural language or ISIN codes
              </p>
            </div>
            
            <SearchBar
              onSearch={handleSearch}
              placeholder="Try 'oeic multi asset', 'unit linked fixed income', or an ISIN code..."
            />
          </div>

          {/* Filter Chips */}
          <FilterChips filters={activeFilters} onRemoveFilter={handleRemoveFilter} />

          {/* Results */}
          <FundTable funds={filteredFunds} />
        </div>
      </main>
    </div>
  );
};

export default Index;
