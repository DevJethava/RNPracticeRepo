import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { ThemeContext } from './ThemeContext'

type ThemeType = {
    isDarkMode: boolean
}

const Box = (props: ThemeType) => {
    const themeContext = useContext(ThemeContext)
    const theme = props.isDarkMode ? themeContext.secondary : themeContext.primary

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.main }}>
            <Text style={{ color: theme.text, fontSize: 20 }}>Theme Context</Text>
        </View>
    )
}

export default Box