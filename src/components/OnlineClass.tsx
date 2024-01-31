import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const OfflineClass = () => {
    return (
        <div className='relative'>
            <section className='online-class w-screen flex items-center justify-center px-5 py-12 lg:px-0'>
                <div className="max-w-5xl flex flex-col lg:flex-row items-center justify-between lg:w-full z-10">
                    <div className='max-w-lg mb-12 lg:mb-0'>
                        <h3 className='text-4xl font-bold text-emerald-700'>Kelas Online</h3>
                        <p className='text-white mt-4 max-w-[85%]'>Kelas online melalui Zoom secara intensif dari Senin-Jumat dengan pengajar yang berkualitas. Kamu bisa tetap mengikuti kelas di mana pun kamu berada.</p>

                        <Link href="/online-programs" className='text-white py-2.5 px-4 bg-emerald-700 inline-flex mt-7 lg:mt-10 items-center hover:bg-emerald-800 duration-150'>
                            <MagnifyingGlassIcon className='w-5 h-5 mr-2' /> Programs
                        </Link>
                    </div>

                    <iframe loading='lazy' width="100%" height="299" src="https://www.youtube.com/embed/txog9JGZLT0" title="Online Class di E-PLC" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </section>
        </div>
    )
}

export default OfflineClass