import React from 'react'

const index = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`${className} mx-auto w-11/12`}>
            {children}
        </div>
    )
}

export default index