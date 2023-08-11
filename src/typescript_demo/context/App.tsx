import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ThemeContextProvider } from './ThemeContext'
import Box from './Box'

const App = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setDarkMode(true)
            clearInterval(interval)
            console.log("dark theme log !!")
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <ThemeContextProvider>
            <Box isDarkMode={isDarkMode} />
        </ThemeContextProvider>
    )
}

export default App