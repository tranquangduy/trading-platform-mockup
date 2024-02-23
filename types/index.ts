export type User = {
  name: string;
  availableAmount: number;
  stocks: Stock[];
};
export type Stock = {
  name: string;
  amount: number;
  boughtPrice: number;
};

export type Market = {
  name: string;
  amount: string;
  currentPrice: number;
};
