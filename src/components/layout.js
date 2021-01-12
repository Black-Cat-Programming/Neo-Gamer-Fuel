import React from "react"

const Layout = ({ children }) => {
    return (
        <div>
            <p>Header can go here</p>
            {children}
            <p>Footer can go here</p>
        </div>
        
    )
}

export default Layout