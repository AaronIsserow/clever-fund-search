import { SearchFilters } from '../types/fund';

const ISIN_REGEX = /^[A-Z0-9]{12}$/;

const PRODUCT_TYPE_KEYWORDS = {
  'OEIC': ['oeic'],
  'Unit Linked': ['unit linked', 'unit-linked', 'linked'],
  'SICAV': ['sicav'],
  'ICAV': ['icav']
};

const ASSET_CLASS_KEYWORDS = {
  'Multi Asset': ['multi asset', 'multi-asset'],
  'Fixed Income': ['fixed income', 'bonds', 'bond'],
  'Active Equities': ['active equities', 'active equity'],
  'Quantitative': ['quant', 'quantitative']
};

export function parseNaturalLanguageQuery(query: string): SearchFilters {
  const normalizedQuery = query.toLowerCase().trim();
  const filters: SearchFilters = {};

  // Check if it's an ISIN
  if (ISIN_REGEX.test(query.toUpperCase())) {
    filters.isin = query.toUpperCase();
    return filters;
  }

  // Check for product type keywords
  for (const [productType, keywords] of Object.entries(PRODUCT_TYPE_KEYWORDS)) {
    if (keywords.some(keyword => normalizedQuery.includes(keyword))) {
      filters.productType = productType;
      break;
    }
  }

  // Check for asset class keywords
  for (const [assetClass, keywords] of Object.entries(ASSET_CLASS_KEYWORDS)) {
    if (keywords.some(keyword => normalizedQuery.includes(keyword))) {
      filters.assetClass = assetClass;
      break;
    }
  }

  return filters;
}

export function getActiveFilters(filters: SearchFilters): Array<{ key: string; value: string; label: string }> {
  const active = [];
  
  if (filters.productType) {
    active.push({ key: 'productType', value: filters.productType, label: `Product: ${filters.productType}` });
  }
  
  if (filters.assetClass) {
    active.push({ key: 'assetClass', value: filters.assetClass, label: `Asset: ${filters.assetClass}` });
  }
  
  if (filters.isin) {
    active.push({ key: 'isin', value: filters.isin, label: `ISIN: ${filters.isin}` });
  }
  
  return active;
}