import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { MarketTableRow } from './TableRow';
import { findPriceChange } from '@/helpers/trade';
import { PriceChangesData } from '@/api/trade';
import { SupportedCurrenciesData } from '@/api/wallet';

type MarketTableListProps = {
  supportedCurrencies: SupportedCurrenciesData;
  priceChanges: PriceChangesData;
};

const MarketTableList = ({
  supportedCurrencies,
  priceChanges
}: MarketTableListProps) => {
  const rowHeight = 80;
  const Row = ({ index, style }: ListChildComponentProps) => {
    const currency = supportedCurrencies.payload[index];
    const currencyPriceChange = findPriceChange(
      currency.currencyGroup,
      priceChanges.payload
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
      height={supportedCurrencies.payload.length * rowHeight}
      className='scrollbar-none'
      width={'100%'}
      itemCount={supportedCurrencies.payload.length}
      itemSize={rowHeight}
    >
      {Row}
    </FixedSizeList>
  );
};

export { MarketTableList };
