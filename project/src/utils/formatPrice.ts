export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

// Convert USD to INR (approximate rate)
export const convertToINR = (usdPrice: number): number => {
  const conversionRate = 83; // USD to INR conversion rate
  return Math.round(usdPrice * conversionRate);
};