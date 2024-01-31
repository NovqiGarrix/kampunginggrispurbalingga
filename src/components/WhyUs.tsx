import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Testimonials from './Testimonials';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const whyUss = [
    {
        img: 'https://kampunginggrisbandung.co.id/wp-content/uploads/2021/05/success.png',
        title: 'Successful Method',
        desc: 'Metode yang tepat dan materi yang berkualitas sehingga sangat mudah dipahami.'
    },
    {
        img: 'https://kampunginggrisbandung.co.id/wp-content/uploads/2021/05/flexi.png',
        title: 'Flexible',
        desc: 'Jadwal belajar yang fleksible. Tersedia kelas pagi, sore dan malam.'
    },
    {
        img: 'https://kampunginggrisbandung.co.id/wp-content/uploads/2021/05/best.png',
        title: 'Best Coaches',
        desc: 'Pengajar berkualitas, cara mengajar yang fun & friendly'
    },
    {
        img: 'https://kampunginggrisbandung.co.id/wp-content/uploads/2021/05/Intensive-1.png',
        title: 'Intensive Class',
        desc: 'Belajar dengan intensif dari mulai Senin hingga Jumat, 19x pertemuan per bulan.'
    },
    {
        img: 'https://kampunginggrisbandung.co.id/wp-content/uploads/2021/05/vip.png',
        title: 'Exclusive Class',
        desc: 'Jumlah peserta dibatasi maksimal ± 15 siswa.'
    },
    {
        img: 'https://kampunginggrisbandung.co.id/wp-content/uploads/2021/05/best-price.png',
        title: 'Best Price',
        desc: 'Biaya yang terjangkau dengan tetap memberikan pelayanan yang berkualitas.'
    },

]

const WhyUs = () => {
    return (
        <div id='about-us' className='relative'>
            <section className='why-us w-screen flex flex-col items-center justify-center px-5 py-12 lg:px-0'>
                <div className="w-full md:max-w-xl lg:max-w-4xl lg:w-full z-10 flex flex-col items-center justify-center">
                    <h3 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-black'>Mengapa Belajar Bahasa Inggris di <br className='hidden lg:block' /> <span className='text-[#FF9D2A]'>Kampung Inggris Purbalingga??</span></h3>

                    <div className='space-y-10 md:space-y-0 mt-10 block md:grid md:grid-cols-2 gap-10 lg:grap-8 lg:grid-cols-3'>
                        {whyUss.map((item) => (
                            <div key={item.title} className='flex flex-col items-center'>
                                <div className='w-3/4 md:w-4/5 flex items-center justify-center'>
                                    <Image
                                        src={item.img}
                                        width={90}
                                        height={90}
                                        alt={item.title}
                                    />
                                </div>

                                <h4 className='text-2xl font-bold text-center mt-5 self-center'>{item.title}</h4>
                                <p className='text-base text-center mt-2 text-gray-500 max-w-xs md:max-w-full'>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <Link className='mt-10 px-16 py-2.5 ring-2 ring-green-700 hover:bg-green-700 hover:text-white duration-150 text-green-700 rounded-md font-semibold' href="/about-us">
                        MORE ABOUT US <ArrowRightIcon className='ml-1 w-5 h-5 inline-flex' />
                    </Link>

                </div>

                <Testimonials />
            </section>
        </div>
    )
}

export default WhyUs