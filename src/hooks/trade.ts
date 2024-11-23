import { tradeApi } from '@/api/trade';
import { useQuery } from '@tanstack/react-query';

export const usePriceChanges = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['price-changes'],
    queryFn: tradeApi.priceChanges.getAll,
    staleTime: tradeApi.priceChanges.staleTime,
    refetchInterval: tradeApi.priceChanges.refetchInterval
  });
  return {
    data: data?.payload || [],
    ...rest
  };
};
