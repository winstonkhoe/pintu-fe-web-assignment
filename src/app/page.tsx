import { tradeApi } from '@/api/trade';
import { walletApi } from '@/api/wallet';
import Market from '@/components/pages/Market';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/helpers/react-query';

export default async function MarketPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['price-changes-b'],
    queryFn: tradeApi.getPriceChanges
  });
  await queryClient.prefetchQuery({
    queryKey: ['supported-currencies-b'],
    queryFn: walletApi.getSupportedCurrencies
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Market />
    </HydrationBoundary>
  );
}
