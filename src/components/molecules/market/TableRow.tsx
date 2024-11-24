import { TableStatisticCell } from '@/components/atoms/market/TableStatisticCell';
import { SvgIcon } from '@/components/atoms/SvgIcon';
import { findPriceChange } from '@/helpers/trade';
import { usePriceChanges } from '@/hooks/trade';
import { PriceChangePayload } from '@/types/Trade';

type MarketTableRowProps = {
  svgUrl: string;
  color: string;
  currencyGroup: string;
  name: string;
};

const MarketTableRow = ({ ...props }: MarketTableRowProps) => {
  const { data } = usePriceChanges();
  const priceChange = findPriceChange(props.currencyGroup, data);
  if (!priceChange) {
    return null;
  }
  return (
    <div className='h-full'>
      <div className='hidden sm:flex'>
        <DesktopMarketTableRow
          {...props}
          data={priceChange}
        />
      </div>
      <div className='h-full flex sm:hidden'>
        <MobileMarketTableRow
          {...props}
          data={priceChange}
        />
      </div>
    </div>
  );
};

type SpecificMarketTableRow = MarketTableRowProps & {
  data: PriceChangePayload;
};

const DesktopMarketTableRow = ({
  svgUrl,
  color,
  currencyGroup,
  name,
  data
}: SpecificMarketTableRow) => {
  return (
    <div className='w-full grid grid-cols-[80px_200px_100px_3fr_2fr_2fr_2fr_2fr]'>
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
        <p className='font-bold whitespace-nowrap'>Rp {data.latestPrice}</p>
      </div>
      <TableStatisticCell value={data.day} />
      <TableStatisticCell value={data.week} />
      <TableStatisticCell value={data.month} />
      <TableStatisticCell value={data.year} />
    </div>
  );
};

const MobileMarketTableRow = ({
  svgUrl,
  color,
  currencyGroup,
  name,
  data
}: SpecificMarketTableRow) => {
  return (
    <div className='w-full grid grid-cols-[1fr_2fr_2fr]'>
      <div className='flex justify-center items-center'>
        <SvgIcon
          src={svgUrl}
          color={color}
        />
      </div>
      <div className='flex flex-col justify-center'>
        <p className='font-bold'>{name}</p>
        <p className='font-bold opacity-60'>{currencyGroup}</p>
      </div>
      <div className='flex flex-col justify-center items-end pr-5'>
        <p className='font-bold whitespace-nowrap'>Rp {data.latestPrice}</p>
        <TableStatisticCell value={data.day} />
      </div>
    </div>
  );
};

export { MarketTableRow };
