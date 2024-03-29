import { Disclosure, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import UserMenu from './UserMenu';

const LayoutMenu = () => {
  const router = useRouter();
  const navigation = [
    {
      name: 'Overview',
      href: '/overview',
      current: router.asPath === '/overview',
    },
    { name: 'Buy', href: '/buy', current: router.asPath === '/buy' },
    { name: 'Sell', href: '/sell', current: router.asPath === '/sell' },
  ];

  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-white">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex gap-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        item.current
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Image
                        width={16}
                        height={16}
                        className="h-8 w-8 rounded-full"
                        src="/imgs/default-avatar.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <UserMenu />
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    item.current
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default LayoutMenu;
