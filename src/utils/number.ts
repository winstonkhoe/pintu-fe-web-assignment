const formatNumberWithThousandSeparator = (numString: string): string => {
  const num = parseFloat(numString);
  const [integerPart, decimalPart] = num.toString().split('.');
  const integerArray = [...integerPart];
  const formattedInteger: string[] = [];

  let count = 0;
  for (let i = integerArray.length - 1; i >= 0; i--) {
    formattedInteger.unshift(integerArray[i]);
    count++;
    if (count === 3 && i > 0) {
      formattedInteger.unshift('.');
      count = 0;
    }
  }

  return decimalPart
    ? `${formattedInteger.join('')},${decimalPart}`
    : formattedInteger.join('');
};

export { formatNumberWithThousandSeparator };
