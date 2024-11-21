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

export { TableHeader };
