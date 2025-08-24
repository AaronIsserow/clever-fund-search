export interface Fund {
  id: string;
  name: string;
  isin: string;
  productType: string;
  assetClass: string;
  sfdr: string;
  shareClass?: string;
  domicile?: string;
  currency?: string;
  priceDate?: string;
  factsheetUrl?: string;
}

export interface SearchFilters {
  productType?: string;
  assetClass?: string;
  isin?: string;
}