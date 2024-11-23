import { fetchToJson } from '@/utils/api';
import { BASE_URL } from './common';
import { SupportedCurrenciesData } from '@/types/Wallet';

const API_SUPPORTED_CURRENCIES = `${BASE_URL}/api/wallet/supportedCurrencies`;

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
