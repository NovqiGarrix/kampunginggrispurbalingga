import Link from 'next/link'
import React from 'react'

const TestEnglishLevel = () => {
    return (
        <div className='relative'>
            <section className='test-english-level w-screen flex items-center justify-center px-5 py-12 lg:px-0'>
                <div className="w-full md:max-w-xl lg:max-w-4xl lg:w-full z-10 flex flex-col items-center justify-center">
                    <h3 className='text-3xl md:text-4xl text-center font-bold text-[#FF9D2A]'>BELUM TAU LEVEL KEMAMPUAN BAHASA INGGRISMU?</h3>
                    <p className='text-white mt-4 text-center text-base md:text-xl md:max-w-[85%]'>Ikuti Pre-Test Gratis untuk Mengukur Kemampuanmu</p>
                    <Link href="#" className='text-white py-2.5 px-4 bg-yellow-600 inline-flex mt-7 lg:mt-10 items-center hover:bg-yellow-700 duration-150'>
                        Click Here
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default TestEnglishLevel