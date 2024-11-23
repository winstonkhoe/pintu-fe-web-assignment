import { TableStatisticCell } from '@/components/atoms/market/TableStatisticCell';
import { SvgIcon } from '@/components/atoms/SvgIcon';
import { findPriceChange } from '@/helpers/trade';
import { usePriceChanges } from '@/hooks/trade';

type MarketTableRowProps = {
  svgUrl: string;
  color: string;
  currencyGroup: string;
  name: string;
};

const MarketTableRow = ({
  svgUrl,
  color,
  currencyGroup,
  name,
}: MarketTableRowProps) => {
  const { data } = usePriceChanges()
  const priceChange = findPriceChange(currencyGroup, data)
  if (!priceChange) {
    return null
  }
  return (
    <div className='grid grid-cols-[80px_200px_100px_3fr_2fr_2fr_2fr_2fr]'>
      <SvgIcon
        src={svgUrl}
        color={color}
      />
      <div className='cell'>
        <p className='font-bold'>{name}</p>
      </div>
      <div className='cell'>
        <p className='font-bold opacity-60'>{currencyGroup}</p>
      </div>
      <div className='cell justify-end'>
        <p className='font-bold whitespace-nowrap'>Rp {priceChange.latestPrice}</p>
      </div>
      <TableStatisticCell value={priceChange.day} />
      <TableStatisticCell value={priceChange.week} />
      <TableStatisticCell value={priceChange.month} />
      <TableStatisticCell value={priceChange.year} />
    </div>
  );
};

export { MarketTableRow };
