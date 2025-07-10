import React from 'react'
import { ThemeContextProvider } from './ThemeContext'

const Provider = ({children}) => {
    return(
        <ThemeContextProvider>
        <div>{children}</div>
        </ThemeContextProvider>
    )
}

export default Provider