import { TableStatisticCell } from "@/components/atoms/market/TableStatisticCell";
import { SvgIcon } from "@/components/atoms/SvgIcon";

type MarketTableRowProps = {
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

const MarketTableRow = ({
  iconSvgText,
  color,
  currencyGroup,
  name,
  price,
  day,
  week,
  month,
  year
}: MarketTableRowProps) => {
  return (
    <div className='grid grid-cols-[80px_300px_150px_2fr_1fr_1fr_1fr_1fr] border-t border-t-white/50'>
      <SvgIcon
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
      <TableStatisticCell value={day} />
      <TableStatisticCell value={week} />
      <TableStatisticCell value={month} />
      <TableStatisticCell value={year} />
    </div>
  );
};

export {MarketTableRow}