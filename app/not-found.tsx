import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
    title: 'Page not found - Lumixus studio',
    description: 'Your one-stop shop for all things digital success',
}

export default function NotFound() {
    return (
        <>            
            <div className='h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <h2 className='text-white text-3xl md:text-5xl font-extrabold'>Not Found</h2>
                    <p className='md:text-base text-sm'>Could not find requested resource</p>
                    <p className='md:text-base text-sm'>
                        <Link className='underline' href="/">Return Home</Link>
                    </p>
                </div>
            </div>
        </>
    )
}