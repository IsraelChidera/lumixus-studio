import React from 'react'

const index = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <button style={{ boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)" }} className={`${className} hover:text-blue hover:bg-white transition-colors ease-linear w-full py-[10px] px-[30px] border border-white bg-transparent text-white`}>
            <div>
                {children}
            </div>
        </button>
    )
}

export default index