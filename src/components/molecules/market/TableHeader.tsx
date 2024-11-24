interface TableHeaderType {
  text?: string;
  isSortable: boolean;
  alignment?: 'left' | 'center' | 'right';
  selectable?: boolean;
}

const TableHeader = () => {
  return [
    <div key={'desktop-table-header'} className='hidden sm:flex flex-1'>
      <DesktopTableHeader />
    </div>,
    <div key={'mobile-table-header'} className="flex sm:hidden">
      <MobileTableHeader />
    </div>
  ];
};

const DesktopTableHeader = () => {
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
    <div className='w-full grid grid-cols-[80px_200px_100px_3fr_2fr_2fr_2fr_2fr] overflow-hidden border-b border-b-white/50'>
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
}

const MobileTableHeader = () => {
  const headers: TableHeaderType[] = [
    { text: 'CRYPTO', isSortable: false, alignment: 'left' },
    { text: '24 JAM', isSortable: true, alignment: 'right' },
  ];
  return (
    <div className='grid grid-cols-[1fr_3fr] overflow-hidden border-b border-b-white/50'>
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
}

export default TableHeader;
