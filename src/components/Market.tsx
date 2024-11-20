'use client';

import { PriceChangesData } from '@/api/trade';
import { SupportedCurrenciesData } from '@/api/wallet';
import { findPriceChange } from '@/helpers/trade';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface TableHeaderType {
  text?: string;
  isSortable: boolean;
  alignment?: 'left' | 'center' | 'right';
}

const TableHeader = () => {
  const headers: TableHeaderType[] = [
    { isSortable: false },
    { text: 'CRYPTO', isSortable: false, alignment: 'left' },
    { isSortable: false },
    { text: 'HARGA', isSortable: true, alignment: 'right' },
    { text: '24 JAM', isSortable: true, alignment: 'center' },
    { text: '1 MGG', isSortable: true, alignment: 'center' },
    { text: '1 BLN', isSortable: true, alignment: 'center' },
    { text: '1 THN', isSortable: true, alignment: 'center' }
  ];
  return (
    <div className='grid grid-cols-[80px_300px_150px_2fr_1fr_1fr_1fr_1fr]'>
      {headers.map((header, headerIndex) => {
        const isCenter = header.alignment === 'center';
        const isRight = header.alignment === 'right';
        return (
          <div
            className={`cell ${isCenter && 'justify-center'} ${
              isRight && 'justify-end'
            }`}
            key={headerIndex}
          >
            {header.text && (
              <p className='font-semibold opacity-80'>{header.text}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

type MarketRowProps = {
  supportedCurrencies: SupportedCurrenciesData;
  priceChanges: PriceChangesData;
};

const MarketRow = ({ supportedCurrencies, priceChanges }: MarketRowProps) => {
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
        <TableRow
          iconSvgText={currency.logoSvg}
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

type TableRowProps = {
  iconSvgText: string;
  color: string;
  currencyGroup: string;
  name: string;
  price: string;
  day: string;
  week: string;
  month: string;
  year: string;
};

const TableRow = ({
  iconSvgText,
  color,
  currencyGroup,
  name,
  price,
  day,
  week,
  month,
  year
}: TableRowProps) => {
  return (
    <div className='grid grid-cols-[80px_300px_150px_2fr_1fr_1fr_1fr_1fr] border-t border-t-white/50'>
      <CurrencyIcon
        svg={iconSvgText}
        color={color}
      />
      <div className='cell'>
        <p className='font-bold'>{name}</p>
      </div>
      <div className='cell'>
        <p className='font-bold opacity-60'>{currencyGroup}</p>
      </div>
      <div className='cell justify-end'>
        <p className='font-bold'>Rp {price}</p>
      </div>
      <NumberCell value={day} />
      <NumberCell value={week} />
      <NumberCell value={month} />
      <NumberCell value={year} />
    </div>
  );
};

type NumberCellProps = {
  value: string;
};

const NumberCell = ({ value }: NumberCellProps) => {
  const isPositive = parseFloat(value) > 0.0;

  return (
    <div className='cell justify-center'>
      <p
        className={`font-bold ${
          isPositive ? 'text-positive' : 'text-negative'
        }`}
      >
        {isPositive && '+'}
        {value}%
      </p>
    </div>
  );
};

type CurrencyIconProps = {
  svg: string;
  color: string;
};

const CurrencyIcon = ({ svg, color }: CurrencyIconProps) => {
  return (
    <div
      className='currency-icon cell'
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{ color: color }}
    />
  );
};

export { TableHeader, MarketRow };
