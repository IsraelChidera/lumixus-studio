import React from 'react'

const index = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`${className} w-10/12 mx-auto`}>
            {children}
        </div>
    )
}

export default index