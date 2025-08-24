import { Fund } from '../types/fund';

export const seedFunds: Fund[] = [
  {
    id: '1',
    name: 'abrdn Diversified Growth and Income Fund',
    isin: 'GB00B1BW3K23',
    productType: 'OEIC',
    assetClass: 'Multi Asset',
    sfdr: 'N/A',
    shareClass: 'A Acc',
    domicile: 'UK',
    currency: 'GBP',
    priceDate: '31-07-2025',
    factsheetUrl: 'https://abrdn.kurtosysweb.com/pdfs/F_STDR_en-GB-NN_GB00B1BW3K23.pdf'
  },
  {
    id: '2',
    name: 'abrdn Life Fund',
    isin: 'GB00BRBM8Q55',
    productType: 'Unit Linked',
    assetClass: 'Fixed Income',
    sfdr: 'N/A',
    shareClass: 'A Acc',
    domicile: 'UK',
    currency: 'GBP',
    priceDate: '31-07-2025',
    factsheetUrl: 'https://abrdn.kurtosysweb.com/pdfs/F_SC_LIFE_en-gb-NN_GB00BRBM8Q55.pdf'
  },
  {
    id: '3',
    name: 'abrdn Global Equity SICAV',
    isin: 'LU2639013478',
    productType: 'SICAV',
    assetClass: 'Active Equities',
    sfdr: 'N/A',
    shareClass: 'Inst Acc',
    domicile: 'LU',
    currency: 'EUR',
    priceDate: '31-07-2025',
    factsheetUrl: 'https://abrdn.kurtosysweb.com/pdfs/F_STDR_en-gb-NN_LU2639013478.pdf'
  },
  {
    id: '4',
    name: 'abrdn Quantitative ICAV',
    isin: 'IE000J7QYHD8',
    productType: 'ICAV',
    assetClass: 'Quantitative',
    sfdr: 'N/A',
    shareClass: 'Inst Acc',
    domicile: 'IE',
    currency: 'USD',
    priceDate: '31-07-2025',
    factsheetUrl: 'https://abrdn.kurtosysweb.com/pdfs/F_STDR_en-gb-NN_IE000J7QYHD8.pdf'
  }
];