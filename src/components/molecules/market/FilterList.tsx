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
  return (
    <div className='flex gap-3 overflow-x-auto'>
      {filters.map((filter) => (
        <Chip
          text={filter}
          isActive={filter === activeFilter}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterList;
