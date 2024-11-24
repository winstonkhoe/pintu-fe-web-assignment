import { QueryClient } from '@tanstack/react-query';
import { mockPriceChanges, mockSupportedCurrencies } from './mock-data';

const mockQueryClient = (queryClient: QueryClient) => {
  queryClient.prefetchQuery({
    queryKey: ['price-changes-pairing'],
    queryFn: () => Promise.resolve(mockPriceChanges)
  });
  queryClient.prefetchQuery({
    queryKey: ['price-changes'],
    queryFn: () => Promise.resolve(mockPriceChanges)
  });
  queryClient.prefetchQuery({
    queryKey: ['supported-currencies'],
    queryFn: () => Promise.resolve(mockSupportedCurrencies)
  });
};

export { mockQueryClient };
