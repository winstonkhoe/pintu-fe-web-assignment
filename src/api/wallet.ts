import { fetchToJson } from '@/utils/api';
import { BASE_URL, GeneralApiResponse } from './common';

const API_SUPPORTED_CURRENCIES = `${BASE_URL}/api/wallet/supportedCurrencies`;

interface Wallet {
  currency_id: number;
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
}

interface SupportedCurrenciesPayload {
  currency_id: number;
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallets: Wallet[];
  is_limit_order_enabled: boolean;
  is_upcoming: boolean;
}

type SupportedCurrenciesData = GeneralApiResponse & {
  payload: SupportedCurrenciesPayload[];
};

const walletApi = {
  supportedCurrencies: {
    staleTime: 60 * 1000,
    refetchInterval: undefined,
    getAll: async (): Promise<SupportedCurrenciesData> => {
      const data: SupportedCurrenciesData = await fetchToJson(
        API_SUPPORTED_CURRENCIES
      );
      return data;
    }
  }
};

export { walletApi };
export type { SupportedCurrenciesData, SupportedCurrenciesPayload };
