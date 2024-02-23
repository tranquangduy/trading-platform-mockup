import { User } from '@/types';

export let user: User = {
  name: 'John',
  availableAmount: 100000,
  stocks: [
    {
      name: 'Apple',
      amount: 10,
      boughtPrice: 20,
    },
    {
      name: 'Tesla',
      amount: 5,
      boughtPrice: 50,
    },
  ],
};

export let prevStockPrices = [20, 11, 12, 46, 55, 33, 22, 78, 96, 12, 36];
