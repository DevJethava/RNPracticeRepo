import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { UserContext } from './UserContext'

const User = () => {

    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "Dev Jethava",
                email: "devjethva909@gmail.com"
            })
        }
    }

    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <View style={styles.container}>
            <Button title='Login' onPress={handleLogin} />
            <Button title='Logout' onPress={handleLogout} />
            {
                userContext?.user !== null &&
                <View>
                    <Text>User Name is {userContext?.user?.name}</Text>
                    <Text>User Email is {userContext?.user?.email}</Text>
                </View>
            }

        </View>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})