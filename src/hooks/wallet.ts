import { walletApi } from '@/api/wallet';
import { useQuery } from '@tanstack/react-query';
import { findPriceChange } from '@/helpers/trade';
import { tradeApi } from '@/api/trade';

export const useSupportedCurrencies = () => {
  const { data: priceChangesData } = useQuery({
    queryKey: ['price-changes-pairing'],
    queryFn: tradeApi.priceChanges.getAll,
    staleTime: Infinity,
    refetchInterval: Infinity
  });
  const { data, ...rest } = useQuery({
    queryKey: ['supported-currencies'],
    queryFn: walletApi.supportedCurrencies.getAll,
    staleTime: walletApi.supportedCurrencies.staleTime,
    refetchInterval: walletApi.supportedCurrencies.refetchInterval
  });

  return {
    data: (data?.payload || []).filter(
      (currency) =>
        !!findPriceChange(
          currency.currencyGroup,
          priceChangesData?.payload || []
        )
    ),
    ...rest
  };
};
