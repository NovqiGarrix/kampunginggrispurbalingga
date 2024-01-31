'use client';

import Link from 'next/link'
import Image from 'next/image'
import { FunctionComponent, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import classNames from '@/utils/cn';
import { UserIcon, ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/solid';

const menuItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About Us',
        href: '#about-us'
    },
    {
        name: 'Our Courses',
        href: '#courses'
    },
    {
        name: 'Galeri',
        href: '/galeri'
    },
]

const Header: FunctionComponent = () => {
    return (
        <header className='flex items-center justify-between px-5 md:px-10 lg:px-0 max-w-5xl w-screen absolute top-8 left-0 right-0 z-10 m-auto'>
            <div className='w-16'>
                <Image
                    src="/logo.png"
                    alt='Logo Kampung Inggris Purbalingga (KEEP)'
                    className='mr-10'
                    width={80}
                    height={80}
                />
            </div>

            <div className='space-x-5 hidden lg:block'>
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className='text-lg font-normal text-white hover:font-medium'
                    >
                        {item.name}
                    </Link>
                )
                )}
            </div>

            <div className='flex items-center space-x-7'>
                <Link href="/login" className='block'>
                    <UserIcon className='w-6 h-6 text-white lg:hidden' />
                </Link>
                <Link href="/carts" className='block'>
                    <ShoppingBagIcon className='w-6 h-6 text-white' />
                </Link>

                <Menu as="div" className="inline-block lg:hidden relative text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <Bars3Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {menuItems.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>


                <Link href="/login" className='hidden lg:block text-lg font-normal text-white hover:font-medium'>Login</Link>
            </div>
        </header>
    )
}

export default Header