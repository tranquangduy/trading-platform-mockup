import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import React, { useState } from 'react';

type Stock = {
  id: string;
  name: string;
};

type StockComboBoxProps = {
  label: string;
  stock: Stock[];
  onChange: (e: any) => void;
};

const StockComboBox: React.FC<StockComboBoxProps> = ({
  stock,
  label,
  onChange,
}) => {
  const [query, setQuery] = useState('');
  const [selectedstock, setSelectedstock] = useState(null);

  const filteredstock =
    query === ''
      ? stock
      : stock.filter((stock) => {
          return stock.name.toLowerCase().includes(query.toLowerCase());
        });

  const handleOnChange = (value: any) => {
    onChange(value);
    setSelectedstock(value);
  };
  return (
    <Combobox as="div" value={selectedstock} onChange={handleOnChange}>
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(stock: Stock) => stock?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredstock.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredstock.map((stock) => (
              <Combobox.Option
                key={stock.id}
                value={stock}
                className={({ active }) =>
                  clsx(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={clsx(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {stock.name}
                    </span>

                    {selected && (
                      <span
                        className={clsx(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default StockComboBox;
