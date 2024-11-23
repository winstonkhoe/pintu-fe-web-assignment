import { walletApi } from '@/api/wallet';
import { useQuery } from '@tanstack/react-query';
import { usePriceChanges } from './trade';
import { findPriceChange } from '@/helpers/trade';

export const useSupportedCurrencies = () => {
  const { data: priceChangesData } = usePriceChanges();
  const { data, ...rest } = useQuery({
    queryKey: ['supported-currencies'],
    queryFn: walletApi.supportedCurrencies.getAll,
    staleTime: walletApi.supportedCurrencies.staleTime,
    refetchInterval: walletApi.supportedCurrencies.refetchInterval
  });
  return {
    data: (data?.payload || []).filter(currency => !!findPriceChange(currency.currencyGroup, priceChangesData)),
    ...rest
  };
};
