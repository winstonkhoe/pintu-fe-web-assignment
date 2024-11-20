import { tradeApi } from '@/api/trade';
import { SupportedCurrenciesData, walletApi } from '@/api/wallet';
import { MarketRow, TableHeader } from '@/components/Market';
import { findPriceChange } from '@/helpers/trade';

export default async function Market() {
  const dataPriceChanges = await tradeApi.getPriceChanges();
  const dataSupportedCurrencies = await walletApi.getSupportedCurrencies();
  const filteredSupportedCurrencies: SupportedCurrenciesData = {
    ...dataSupportedCurrencies,
    payload: dataSupportedCurrencies.payload.filter((currency) => {
      return !!findPriceChange(currency.currencyGroup, dataPriceChanges.payload)
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
          <MarketRow
            supportedCurrencies={filteredSupportedCurrencies}
            priceChanges={dataPriceChanges}
          />
        </div>
      </div>
    </div>
  );
}