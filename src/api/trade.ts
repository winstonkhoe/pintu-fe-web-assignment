import { fetchToJson } from '@/utils/api';
import { BASE_URL } from './common';
import { PriceChangesData } from '@/types/Trade';

const API_PRICE_CHANGES = `${BASE_URL}/api/trade/price-changes`;

const tradeApi = {
  priceChanges: {
    staleTime: 5 * 1000 - 1,
    refetchInterval: 5 * 1000,
    getAll: async (): Promise<PriceChangesData> => {
      return await fetchToJson(API_PRICE_CHANGES);
    }
  }
};

export { tradeApi };
export type { PriceChangesData };
