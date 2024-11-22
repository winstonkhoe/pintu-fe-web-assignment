import { PriceChangePayload } from '@/api/trade';

const findPriceChange = (
  currencyGroup: string,
  priceChanges: PriceChangePayload[]
) => {
  return priceChanges.find((priceChange) => {
    const firstPairPart = priceChange.pair.split('/')[0];
    return firstPairPart === currencyGroup.toLowerCase();
  });
};

export { findPriceChange };
