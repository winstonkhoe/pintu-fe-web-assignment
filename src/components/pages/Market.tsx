'use client';

import FilterList from '../molecules/market/FilterList';
import SearchBar from '../molecules/market/SearchBar';
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
          <SearchBar />
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
