import { Fund } from '../types/fund';

export const seedFunds: Fund[] = [
  {
    id: '1',
    name: 'abrdn Diversified Growth and Income Fund',
    isin: 'GB00B1BW3K23',
    productType: 'OEIC',
    assetClass: 'Multi Asset',
    sfdr: 'N/A',
    description: 'A multi-asset portfolio aiming to deliver long-term growth while balancing income and risk by investing across a range of asset classes, including equities, fixed income, and alternative investments.',
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
    description: 'A fixed-income focused unit-linked fund designed for investors seeking stable returns and lower volatility, primarily through exposure to bonds and other income-generating instruments.',
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
    description: 'A globally diversified equity fund managed actively to identify high-conviction stock opportunities worldwide, aiming for long-term capital growth.',
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
    description: 'A quantitative investment strategy using data-driven models to build an optimized portfolio, balancing risk and return across a diverse set of global markets.',
    shareClass: 'Inst Acc',
    domicile: 'IE',
    currency: 'USD',
    priceDate: '31-07-2025',
    factsheetUrl: 'https://abrdn.kurtosysweb.com/pdfs/F_STDR_en-gb-NN_IE000J7QYHD8.pdf'
  },
  {
    id: '5',
    name: 'abrdn Fixed Income Fund',
    isin: 'GB0006573439',
    productType: 'OEIC',
    assetClass: 'Fixed Income',
    sfdr: 'N/A',
    description: 'A traditional fixed-income fund focusing on high-quality bonds, aiming to generate steady income and preserve capital with moderate risk.',
    shareClass: 'A Acc',
    domicile: 'UK',
    currency: 'GBP',
    priceDate: '31-07-2025',
    factsheetUrl: 'https://abrdn.kurtosysweb.com/pdfs/F_STDI_en-gb-NN_GB0006573439.pdf'
  }
];