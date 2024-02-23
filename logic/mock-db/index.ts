import { User } from '@/types';

export let user: User = {
  name: 'John',
  availableAmount: 100000,
  stocks: [
    {
      name: 'Apple',
      amount: 10,
      value: 100,
    },
    {
      name: 'Tesla',
      amount: 5,
      value: 500,
    },
  ],
};
