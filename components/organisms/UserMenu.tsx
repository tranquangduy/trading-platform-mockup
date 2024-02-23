import { useSignOut } from '@/logic/useSignout';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment } from 'react';

const UserMenu = () => {
  const { signOut } = useSignOut();

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <a
              onClick={signOut}
              className={clsx(
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700'
              )}
            >
              {'Sign out'}
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );
};

export default UserMenu;
