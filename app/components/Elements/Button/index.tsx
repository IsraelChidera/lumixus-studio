import React from 'react'

const index = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: any }) => {
    return (
        <button onClick={onClick} style={{ boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)" }} className={`${className} w-fit py-[10px] px-[30px] bg-blue text-white`}>
            {children}
        </button>
    )
}

export default index