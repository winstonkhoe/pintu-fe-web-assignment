import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { MarketTableRow } from './TableRow';
import { useSupportedCurrencies } from '@/hooks/wallet';
import { usePriceChanges } from '@/hooks/trade';
import { findPriceChange } from '@/helpers/trade';

const MarketTableList = () => {
  const { data: supportedCurrenciesData } = useSupportedCurrencies();
  const { data: priceChangesData } = usePriceChanges();
  const rowHeight = 80;
  const Row = ({ index, style }: ListChildComponentProps) => {
    const currency = supportedCurrenciesData[index];
    const currencyPriceChange = findPriceChange(
      currency.currencyGroup,
      priceChangesData
    );

    if (!currencyPriceChange) {
      return null;
    }

    return (
      <div
        key={currency.currency_id}
        style={style}
      >
        <MarketTableRow
          svgUrl={currency.logo}
          color={currency.color}
          name={currency.name}
          currencyGroup={currency.currencyGroup}
          price={currencyPriceChange.latestPrice}
          day={currencyPriceChange.day}
          week={currencyPriceChange.week}
          month={currencyPriceChange.month}
          year={currencyPriceChange.year}
        />
      </div>
    );
  };
  return (
    <FixedSizeList
      height={10 * rowHeight}
      className='scrollbar-none'
      width={'100%'}
      itemCount={supportedCurrenciesData.length}
      itemSize={rowHeight}
      onItemsRendered={props => console.log('onItemsRendered', props)}
    >
      {Row}
    </FixedSizeList>
  );
};

export { MarketTableList };
