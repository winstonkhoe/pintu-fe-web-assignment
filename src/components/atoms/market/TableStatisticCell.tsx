type TableStatisticCellProps = {
  value: string;
};

const TableStatisticCell = ({ value }: TableStatisticCellProps) => {
  const isPositive = parseFloat(value) > 0.0;

  return (
    <div className='sm:cell justify-center'>
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

export { TableStatisticCell };
