import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Fund, SearchFilters } from '@/types/fund';

export function useFunds(filters: SearchFilters) {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFunds() {
      setLoading(true);
      setError(null);

      try {
        let query = supabase
          .from('funds')
          .select('*');

        // Apply filters
        if (filters.productType) {
          query = query.eq('product_type', filters.productType);
        }
        if (filters.assetClass) {
          query = query.eq('asset_class', filters.assetClass);
        }
        if (filters.isin) {
          query = query.eq('isin', filters.isin);
        }

        const { data, error } = await query;

        if (error) {
          setError(error.message);
          return;
        }

        // Transform database fields to match Fund interface
        const transformedFunds: Fund[] = (data || []).map(fund => ({
          id: fund.id,
          name: fund.name,
          isin: fund.isin,
          productType: fund.product_type,
          assetClass: fund.asset_class,
          sfdr: fund.sfdr,
          description: fund.description,
          shareClass: fund.share_class,
          domicile: fund.domicile,
          currency: fund.currency,
          priceDate: fund.price_date,
          factsheetUrl: fund.factsheet_url
        }));

        setFunds(transformedFunds);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchFunds();
  }, [filters.productType, filters.assetClass, filters.isin]);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from('funds')
        .select('*');

      // Apply filters
      if (filters.productType) {
        query = query.eq('product_type', filters.productType);
      }
      if (filters.assetClass) {
        query = query.eq('asset_class', filters.assetClass);
      }
      if (filters.isin) {
        query = query.eq('isin', filters.isin);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
        return;
      }

      // Transform database fields to match Fund interface
      const transformedFunds: Fund[] = (data || []).map(fund => ({
        id: fund.id,
        name: fund.name,
        isin: fund.isin,
        productType: fund.product_type,
        assetClass: fund.asset_class,
        sfdr: fund.sfdr,
        description: fund.description,
        shareClass: fund.share_class,
        domicile: fund.domicile,
        currency: fund.currency,
        priceDate: fund.price_date,
        factsheetUrl: fund.factsheet_url
      }));

      setFunds(transformedFunds);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { funds, loading, error, refetch };
}