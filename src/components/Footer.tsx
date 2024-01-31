import Link from 'next/link';
import React from 'react';
// import { Gmail, Instagram, Tiktok, WhatsApp } from './Socials'
import { SocialIcon } from 'react-social-icons';

const socials = [
    {
        href: 'https://instagram.com/kampunginggrispurbalingga',
        network: 'instagram'
    },
    {
        href: 'https://www.tiktok.com/@keep.purbalingga',
        network: 'tiktok'
    },
    {
        href: 'https://wa.me/6281243257772',
        network: 'whatsapp'
    },
    {
        href: 'mailto:kampunginggrispurbalingga@gmail.com',
        network: 'email'
    },
]

const Footer = () => {
    return (
        <div className='relative'>
            <section className='bg-slate-900 px-5 py-12 lg:px-0 flex flex-col items-center justify-center w-screen'>
                <div className='md:max-w-lg space-y-8 lg:space-y-0 lg:max-w-6xl lg:grid lg:grid-cols-4 lg:gap-8 lg:justify-between'>
                    <div>
                        <h4 className='text-base text-gray-50 uppercase font-semibold'>ABOUT US</h4>
                        <Divider />
                        <p className='text-sm text-gray-400'>Silahkan datang ke E-PLC atau kontak Whatsapp Admin untuk informasi lebih lanjut seputar kursus bahasa Inggris dengan biaya terjangkau.</p>

                        <div className='flex flex-row space-x-3 mt-3'>
                            {socials.map(({ href, network }) => (
                                <Link
                                    key={network}
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='border border-white rounded-full w-8 h-8 flex items-center justify-center'
                                >
                                    <SocialIcon network={network} as='div' bgColor='transparent' fgColor='#fff' style={{ width: 35, height: 35 }} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className='text-base text-gray-50 uppercase font-semibold'>LOCATION</h4>
                        <Divider />
                        <iframe className='lg:h-48' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253496.9166135807!2d107.609724!3d-6.903837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6461f3c8417%3A0x7d6b35967d741d74!2sKAMPUNG%20INGGRIS%20BANDUNG%20E-PLC!5e0!3m2!1sid!2sid!4v1706710572947!5m2!1sid!2sid" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div>
                        <h4 className='text-base text-gray-50 uppercase font-semibold'>ALAMAT</h4>
                        <Divider />
                        <p className='text-sm text-gray-400'>Jl. Purnawarman No.70, Tamansari, Bandung Wetan, Kota Bandung, Jawa Barat 40116</p>
                    </div>

                    <div>
                        <h4 className='text-base text-gray-50 uppercase font-semibold'>JAM KERJA</h4>
                        <Divider />
                        <div className='space-y-3'>
                            <div>
                                <h5 className='text-white font-semibold'>Monday - Friday</h5>
                                <p className='text-gray-400 text-sm mt-2'>8:00 AM to 9:00 PM</p>
                            </div>
                            <div>
                                <h5 className='text-white font-semibold'>Saturday</h5>
                                <p className='text-gray-400 text-sm mt-2'>8:00 AM to 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer

function Divider() {
    return (
        <div className='w-10 border-t-2 border-gray-200 my-4'></div>
    )
}