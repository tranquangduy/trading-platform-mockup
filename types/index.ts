export type User = {
  name: string;
  availableAmount: number;
  stocks: Stock[];
};
export type Stock = {
  name: string;
  amount: number;
  value: number;
};
