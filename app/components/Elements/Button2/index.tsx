import React from 'react'

const index = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: any }) => {
    return (
        <button type="submit" onClick={onClick} style={{ boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)" }} className={`${className} hover:text-blue bg-[#151618] text-white transition-colors ease-linear w-full py-[10px] px-[30px]  `}>
            <div>
                {children}
            </div>
        </button>
    )
}

export default index