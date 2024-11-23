import { PriceChangePayload } from "@/types/Trade";

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
