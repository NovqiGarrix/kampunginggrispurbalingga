import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

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
        <header className='flex items-center justify-between max-w-5xl w-screen absolute top-8 left-0 right-0 z-10 m-auto'>
            <div className='flex items-center'>
                <Image
                    src="/logo.png"
                    alt='Logo Kampung Inggris Purbalingga (KEEP)'
                    className='mr-10'
                    width={80}
                    height={80}
                />

                <div className='space-x-5'>
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
            </div>

            <div className='items-center space-x-7'>
                <Link href="/login" className='text-lg font-normal text-white hover:font-medium'>Login</Link>
                <Link href="/carts" className='bg-slate-200 py-2.5 px-6 rounded hover:bg-slate-50 duration-150'>Cart / Rp 0</Link>
            </div>
        </header>
    )
}

export default Header