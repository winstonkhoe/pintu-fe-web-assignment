import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { MarketTableRow } from './TableRow';
import { useSupportedCurrencies } from '@/hooks/wallet';
import { useFilter } from '@/contexts/FilterContext';

const MarketTableList = () => {
  const { data: supportedCurrenciesData } = useSupportedCurrencies();
  const { filter } = useFilter();

  const filteredCurrencies = supportedCurrenciesData?.filter((currency) =>
    currency.name.toLowerCase().includes(filter.toLowerCase())
  );

  const rowHeight = 80;
  const Row = ({ index, style }: ListChildComponentProps) => {
    const currency = filteredCurrencies[index];

    return (
      <div
        key={currency.currency_id}
        style={style}
        className='first:border-none border-t dark:border-t-white/50'
      >
        <MarketTableRow
          svgUrl={currency.logo}
          color={currency.color}
          name={currency.name}
          currencyGroup={currency.currencyGroup}
        />
      </div>
    );
  };
  
  return (
    <FixedSizeList
      height={Math.min(13, filteredCurrencies.length) * rowHeight}
      width={'100%'}
      itemCount={filteredCurrencies.length}
      itemSize={rowHeight}
    >
      {Row}
    </FixedSizeList>
  );
};

export default MarketTableList;
