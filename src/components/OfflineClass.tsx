import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const OfflineClass = () => {
    return (
        <div id='courses' className='relative'>
            <section className='offline-class w-screen flex items-center justify-center px-5 py-12 lg:px-0'>
                <div className="max-w-5xl flex flex-col lg:flex-row items-center justify-between lg:w-full z-10">
                    <div className='max-w-lg mb-12 lg:mb-0'>
                        <h3 className='text-4xl font-bold text-[#FF9D2A]'>Kelas Offline</h3>
                        <p className='text-white mt-4 max-w-[85%]'>Kelas tatap muka langsung secara intensif. Tersedia Kelas Offline Regular (Senin-Jumat) dan Kelas Offline Weekend (Sabtu-Minggu). Rasakan sensasi belajar secara langsung dengan pengajar yang berkualitas.</p>

                        <Link href="/offline-programs" className='text-white py-2.5 px-4 bg-yellow-600 inline-flex mt-7 lg:mt-10 items-center hover:bg-yellow-700 duration-150'>
                            <MagnifyingGlassIcon className='w-5 h-5 mr-2' /> Programs
                        </Link>
                    </div>

                    <iframe loading='lazy' width="100%" height="299" src="https://www.youtube.com/embed/K217lhTfoVc" title="Offline Class di Kampung Inggris Bandung E-PLC" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </section>
        </div>
    )
}

export default OfflineClass