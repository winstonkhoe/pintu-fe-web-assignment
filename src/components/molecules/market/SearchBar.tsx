'use client';
import React, { useState } from 'react';
import { useFilter } from '@/contexts/FilterContext';
import debounce from 'lodash.debounce';
import { IoClose, IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  const { filter, setFilter } = useFilter();
  const [localValue, setLocalValue] = useState(filter);

  const debouncedSetFilter = debounce((value: string) => {
    setFilter(value);
  }, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalValue(value);
    debouncedSetFilter(value);
  };

  const clearSearchFilter = () => {
    setLocalValue('');
    setFilter('');
  };

  return (
    <div className='rounded-lg border dark:border-white/30 w-[300px] flex items-center gap-2 px-2 sm:px-4 py-2 sm:py-3 opacity-60'>
      <label
        htmlFor='market-search-bar'
        className='cursor-pointer'
      >
        <IoSearch className='text-lg' />
      </label>
      <input
        value={localValue}
        onChange={handleChange}
        id='market-search-bar'
        className='bg-transparent w-full text-sm dark:placeholder:text-white focus-within:outline-none appearance-none'
        placeholder='Cari aset di Pintu'
        aria-label='Search'
      />
      {localValue.length > 0 && (
        <IoClose
          aria-label='Clear Search'
          className='text-xl cursor-pointer'
          onClick={clearSearchFilter}
        />
      )}
    </div>
  );
};

export default SearchBar;
