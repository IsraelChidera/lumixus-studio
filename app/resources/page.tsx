import Link from 'next/link';
import React from 'react';
import { TbComet } from "react-icons/tb";

const page = () => {
    return (
        <main>
            <div className='h-[60vh] flex items-center justify-center'>
                <div className='text-center'>
                    <div className="flex items-center justify-center">
                        <TbComet className='text-[80px] lg:text-[160px] text-white' />
                    </div>
                    <h2 className='text-white text-xl md:text-3xl font-extrabold'>Something awesome is coming</h2>
                    <p className='pt-4 md:text-base text-sm'>
                        We're working on something exciting. Stay in the loop
                    </p>
                </div>
            </div>
        </main>
    )
}

export default page