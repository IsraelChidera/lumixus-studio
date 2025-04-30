import { Metadata } from 'next'
import Link from 'next/link'
import { MdOutlineFoundation } from 'react-icons/md'


export const metadata: Metadata = {
    title: 'Page not found - Lumixus studio',
    description: 'Your one-stop shop for all things digital success',
}

export default function NotFound() {
    return (
        <>
            <div className='h-[60vh] flex items-center justify-center'>
                <div className='text-center'>
                    <div className="flex items-center justify-center">
                        <MdOutlineFoundation className='text-[80px] lg:text-[160px] text-white' />
                    </div>
                    <h2 className='text-white text-2xl md:text-5xl font-extrabold'>Not Found</h2>
                    <p className='pt-4 md:text-base text-sm'>Could not find requested resource</p>
                    <p className='md:text-base text-sm pt-2'>
                        <Link className='transition-all ease-linear delay-75 translate-x-3 hover:no-underline underline underline-offset-4' href="/">Return Home</Link>
                    </p>
                </div>
            </div>
        </>
    )
}