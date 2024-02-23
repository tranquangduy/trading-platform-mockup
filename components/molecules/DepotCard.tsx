import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import React from 'react';

type DepotCardProps = {
  name: string;
  stat: string;
  previousStat?: string;
  change?: string;
  changeType?: string;
};

const DepotCard: React.FC<DepotCardProps> = ({
  name,
  stat,
  previousStat,
  change,
  changeType,
}) => {
  return (
    <>
      <dl className="mt-5 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        <div key={name} className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">{name}</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {stat}
              {previousStat && (
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from {previousStat}
                </span>
              )}
            </div>

            {changeType && (
              <div
                className={clsx(
                  changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {changeType === 'increase' ? 'Increased' : 'Decreased'} by{' '}
                </span>
                {change}
              </div>
            )}
          </dd>
        </div>
      </dl>
    </>
  );
};

export default DepotCard;
