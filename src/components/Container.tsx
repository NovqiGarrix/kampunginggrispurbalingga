import React, { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
    return (
        <section className='max-w-xl'>{children}</section>
    )
}

export default Container