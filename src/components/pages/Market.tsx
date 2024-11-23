'use client';

import { useQuery } from '@tanstack/react-query';
import { TableHeader } from '../atoms/market/TableHeader';
import { tradeApi } from '@/api/trade';
import { walletApi } from '@/api/wallet';
import { findPriceChange } from '@/helpers/trade';
import { MarketTableList } from '../molecules/market/TableList';
import { SupportedCurrenciesData } from '@/types/Wallet';

export default function Market() {
  const {
    isPending: isPendingPriceChanges,
    error: isErrorPriceChanges,
    data: dataPriceChanges
  } = useQuery({
    queryKey: ['price-changes'],
    queryFn: tradeApi.priceChanges.getAll,
    staleTime: tradeApi.priceChanges.staleTime,
    refetchInterval: tradeApi.priceChanges.refetchInterval
  });

  const {
    isPending: isPendingSupportedCurrencies,
    error: isErrorSupportedCurrencies,
    data: dataSupportedCurrencies
  } = useQuery({
    queryKey: ['supported-currencies'],
    queryFn: walletApi.supportedCurrencies.getAll,
    staleTime: walletApi.supportedCurrencies.staleTime,
    refetchInterval: walletApi.supportedCurrencies.refetchInterval
  });

  if (isPendingPriceChanges || isPendingSupportedCurrencies)
    return 'Loading...';

  if (isErrorPriceChanges || isErrorSupportedCurrencies)
    return (
      'An error has occurred: ' +
      (isErrorPriceChanges || isErrorSupportedCurrencies)?.message
    );

  const filteredSupportedCurrencies: SupportedCurrenciesData = {
    ...dataSupportedCurrencies,
    payload: dataSupportedCurrencies.payload.filter((currency) => {
      return !!findPriceChange(
        currency.currencyGroup,
        dataPriceChanges?.payload || []
      );
    })
  };
    
  return (
    <div className='flex justify-center py-10'>
      <div className='flex flex-col w-10/12 gap-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>
            Harga Crypto dalam Rupiah Hari Ini
          </h1>
          <div className='rounded-lg dark:border dark:border-white/30 w-[300px] flex gap-2 px-4 py-3'>
            <p className='opacity-60 text-sm'>Cari aset di Pintu</p>
          </div>
        </div>
        <div className='flex flex-col border border-white/50 rounded-lg'>
          <TableHeader />
          <MarketTableList
            supportedCurrencies={filteredSupportedCurrencies}
            priceChanges={dataPriceChanges}
          />
        </div>
      </div>
    </div>
  );
}
