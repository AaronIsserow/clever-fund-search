import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Fund } from '../types/fund';

interface FundTableProps {
  funds: Fund[];
}

export function FundTable({ funds }: FundTableProps) {
  if (funds.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">No funds found matching your search criteria.</p>
      </Card>
    );
  }

  const openFactsheet = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Found {funds.length} fund{funds.length !== 1 ? 's' : ''}
      </div>
      
      <div className="grid gap-4">
        {funds.map((fund) => (
          <Card key={fund.id} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="md:col-span-2">
                <h3 className="font-semibold text-foreground mb-1">{fund.name}</h3>
                <p className="text-sm text-muted-foreground">ISIN: {fund.isin}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">{fund.shareClass}</p>
                <p className="text-xs text-muted-foreground">{fund.productType}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">{fund.sfdr}</p>
                <p className="text-xs text-muted-foreground">SFDR</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">{fund.assetClass}</p>
                <p className="text-xs text-muted-foreground">Asset Class</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="text-xs text-muted-foreground">
                {fund.domicile} • {fund.currency} • {fund.priceDate}
              </div>
              
              {fund.factsheetUrl && (
                <Button
                  onClick={() => openFactsheet(fund.factsheetUrl!)}
                  size="sm"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Factsheet
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}