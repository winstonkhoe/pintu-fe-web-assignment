import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { MarketTableRow } from './TableRow';
import { useSupportedCurrencies } from '@/hooks/wallet';

const MarketTableList = () => {
  const { data: supportedCurrenciesData } = useSupportedCurrencies();
  const rowHeight = 80;
  const Row = ({ index, style }: ListChildComponentProps) => {
    const currency = supportedCurrenciesData[index];

    return (
      <div
        key={currency.currency_id}
        style={style}
        className='first:border-none border-t border-t-white/50'
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
      height={13 * rowHeight}
      width={'100%'}
      itemCount={supportedCurrenciesData.length}
      itemSize={rowHeight}
    >
      {Row}
    </FixedSizeList>
  );
};

export { MarketTableList };
