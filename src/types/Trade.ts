import { GeneralApiResponse } from "./Api";

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

export type { PriceChangePayload, PriceChangesData };
