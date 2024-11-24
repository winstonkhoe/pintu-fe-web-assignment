'use client';

import FilterList from '../molecules/market/FilterList';
import TableHeader from '../molecules/market/TableHeader';
import MarketTableList from '../molecules/market/TableList';

export default function Market() {
  return (
    <div className='flex justify-center py-6 sm:py-10'>
      <div className='flex flex-col sm:w-10/12 gap-4 sm:gap-8 overflow-hidden'>
        <div className='flex justify-between items-center px-4 sm:px-0'>
          <h1 className='text-base sm:text-2xl font-bold'>
            Harga Crypto dalam Rupiah Hari Ini
          </h1>
          <div className='hidden rounded-lg border dark:border-white/30 w-[300px] sm:flex gap-2 px-4 py-3'>
            <p className='opacity-60 text-sm'>Cari aset di Pintu</p>
          </div>
        </div>
        <FilterList />
        <div className='flex flex-col border dark:border-white/50 sm:rounded-lg'>
          <TableHeader />
          <MarketTableList />
        </div>
      </div>
    </div>
  );
}
