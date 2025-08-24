-- Create funds table
CREATE TABLE public.funds (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  isin TEXT NOT NULL UNIQUE,
  product_type TEXT NOT NULL,
  asset_class TEXT NOT NULL,
  sfdr TEXT DEFAULT 'N/A',
  description TEXT,
  share_class TEXT,
  domicile TEXT,
  currency TEXT,
  price_date TEXT,
  factsheet_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.funds ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read funds (public data)
CREATE POLICY "Anyone can view funds" 
ON public.funds 
FOR SELECT 
USING (true);

-- Create policy to allow anyone to insert funds (for admin functionality)
CREATE POLICY "Anyone can insert funds" 
ON public.funds 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to update funds
CREATE POLICY "Anyone can update funds" 
ON public.funds 
FOR UPDATE 
USING (true);

-- Create policy to allow anyone to delete funds
CREATE POLICY "Anyone can delete funds" 
ON public.funds 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_funds_updated_at
BEFORE UPDATE ON public.funds
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert seed data
INSERT INTO public.funds (name, isin, product_type, asset_class, sfdr, description, share_class, domicile, currency, price_date, factsheet_url) VALUES
('abrdn Diversified Growth and Income Fund', 'GB00B1BW3K23', 'OEIC', 'Multi Asset', 'N/A', 'A multi-asset portfolio aiming to deliver long-term growth while balancing income and risk by investing across a range of asset classes, including equities, fixed income, and alternative investments.', 'A Acc', 'UK', 'GBP', '31-07-2025', 'https://abrdn.kurtosysweb.com/pdfs/F_STDR_en-GB-NN_GB00B1BW3K23.pdf'),
('abrdn Life Fund', 'GB00BRBM8Q55', 'Unit Linked', 'Fixed Income', 'N/A', 'A fixed-income focused unit-linked fund designed for investors seeking stable returns and lower volatility, primarily through exposure to bonds and other income-generating instruments.', 'A Acc', 'UK', 'GBP', '31-07-2025', 'https://abrdn.kurtosysweb.com/pdfs/F_SC_LIFE_en-gb-NN_GB00BRBM8Q55.pdf'),
('abrdn Global Equity SICAV', 'LU2639013478', 'SICAV', 'Active Equities', 'N/A', 'A globally diversified equity fund managed actively to identify high-conviction stock opportunities worldwide, aiming for long-term capital growth.', 'Inst Acc', 'LU', 'EUR', '31-07-2025', 'https://abrdn.kurtosysweb.com/pdfs/F_STDR_en-gb-NN_LU2639013478.pdf'),
('abrdn Quantitative ICAV', 'IE000J7QYHD8', 'ICAV', 'Quantitative', 'N/A', 'A quantitative investment strategy using data-driven models to build an optimized portfolio, balancing risk and return across a diverse set of global markets.', 'Inst Acc', 'IE', 'USD', '31-07-2025', 'https://abrdn.kurtosysweb.com/pdfs/F_STDR_en-gb-NN_IE000J7QYHD8.pdf'),
('abrdn Fixed Income Fund', 'GB0006573439', 'OEIC', 'Fixed Income', 'N/A', 'A traditional fixed-income fund focusing on high-quality bonds, aiming to generate steady income and preserve capital with moderate risk.', 'A Acc', 'UK', 'GBP', '31-07-2025', 'https://abrdn.kurtosysweb.com/pdfs/F_STDI_en-gb-NN_GB0006573439.pdf');