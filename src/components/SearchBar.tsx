import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = "Search funds..." }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
    onSearch(example);
  };

  const examples = [
    'oeic multi asset',
    'unit linked fixed income',
    'sicav active equity',
    'icav quantitative',
    'GB00B1BW3K23'
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-24 h-14 text-lg bg-card border-2 border-border focus:border-primary"
        />
        <Button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10"
        >
          Search
        </Button>
      </form>
      
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground text-center">Try these examples:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {examples.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleExampleClick(example)}
              className="text-xs"
            >
              {example}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}