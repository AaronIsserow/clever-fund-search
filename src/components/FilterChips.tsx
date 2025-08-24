import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Filter {
  key: string;
  value: string;
  label: string;
}

interface FilterChipsProps {
  filters: Filter[];
  onRemoveFilter: (key: string) => void;
}

export function FilterChips({ filters, onRemoveFilter }: FilterChipsProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-sm text-muted-foreground self-center">Applied filters:</span>
      {filters.map((filter) => (
        <div
          key={filter.key}
          className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
        >
          <span>{filter.label}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemoveFilter(filter.key)}
            className="h-auto p-0 hover:bg-transparent text-primary"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      ))}
    </div>
  );
}