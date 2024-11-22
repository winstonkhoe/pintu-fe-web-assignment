import { fetchToJson } from '@/utils/api';
import { GeneralApiResponse } from './common';

const API_PRICE_CHANGES = '/api/trade/price-changes';

interface PriceChangePayload {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

type PriceChangesData = GeneralApiResponse & {
  payload: PriceChangePayload[];
};

const tradeApi = {
  priceChanges: {
    staleTime: 5 * 1000 - 1,
    refetchInterval: 5 * 1000,
    getAll: async () : Promise<PriceChangesData> => {
      return await fetchToJson(API_PRICE_CHANGES)
    }
  }
}

export { tradeApi }
export type { PriceChangesData, PriceChangePayload };
