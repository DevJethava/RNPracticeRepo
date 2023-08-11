import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UserContextProvider } from './UserContext'
import User from './User'

const App = () => {
    return (
        <UserContextProvider>
            <View style={styles.container}>
                <User />
            </View>
        </UserContextProvider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})