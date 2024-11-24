import Chip from '@/components/atoms/Chip';
import { useState } from 'react';

const FilterList = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const filters = [
    'Terbaru',
    'DeFi',
    'NFT/Gaming',
    'CEX',
    'Layer-1',
    'DePIN',
    'Lending',
    'Layer-2',
    'Ekosistem',
    'Stablecoin',
    'Artificial Intelligence & Big Data',
    'Web3',
    'Real World Asset',
    'Token Meme',
    'IoT',
    'Ekosistem BRC-20'
  ];

  const toggleFilter = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter('');
      return;
    }
    setActiveFilter(filter);
  };

  return (
    <div className='flex px-4 sm:px-0 gap-3 overflow-x-auto scrollbar-none'>
      {filters.map((filter) => (
        <Chip
          key={filter}
          text={filter}
          isActive={filter === activeFilter}
          onClick={() => toggleFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterList;
