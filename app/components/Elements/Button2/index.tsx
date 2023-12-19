import React from 'react'

const index = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: any }) => {
    return (
        <button type="submit" onClick={onClick} style={{ boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)" }} className={`${className} hover:text-blue hover:bg-white transition-colors ease-linear w-full py-[10px] px-[30px] border border-white bg-transparent text-white`}>
            <div>
                {children}
            </div>
        </button>
    )
}

export default index