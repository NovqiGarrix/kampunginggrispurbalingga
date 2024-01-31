import React from 'react'

const Copyright = () => {
    return (
        <section className='w-screen bg-orange-700 py-2.5 flex items-center justify-center px-5 text-center'>
            <p className='text-white text-sm'>© {new Date().getFullYear()} Kampung Inggris Purbalingga (KEEP). <br className='md:hidden' /> All rights reserved.</p>
        </section>
    )
}

export default Copyright