import { fetchToJson } from '@/utils/api';
import { GeneralApiResponse } from './common';

const API_PRICE_CHANGES = 'https://api.pintu.co.id/v2/trade/price-changes';

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
  getPriceChanges: async () : Promise<PriceChangesData> => {
    return await fetchToJson(API_PRICE_CHANGES)
  }
}

export { tradeApi }
export type { PriceChangesData, PriceChangePayload };
