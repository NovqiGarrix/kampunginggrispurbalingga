import { FunctionComponent } from 'react'
import { WEB_DESCRIPTION, WEB_TITLE } from '@/constant'
import Link from 'next/link'

const Hero: FunctionComponent = () => {
    return (
        <section className='hero w-screen h-screen flex flex-col justify-center items-center'>
            <div className="w-full md:max-w-2xl md:px-10 lg:max-w-5xl z-10 text-center">
                <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold uppercase text-white'>{WEB_TITLE}</h1>
                <h3 className='mt-5 mb-10 text-sm px-5 md:text-xl text-gray-200'>{WEB_DESCRIPTION}</h3>

                <Link
                    href="/free_class"
                    className='bg-[#E2B707] hover:bg-[#D1AA0C] text-white py-2.5 px-6 rounded-full text-sm md:text-base lg:text-xl font-medium'
                >
                    Coba Kelas Gratis
                </Link>
            </div>
        </section>
    )
}

export default Hero