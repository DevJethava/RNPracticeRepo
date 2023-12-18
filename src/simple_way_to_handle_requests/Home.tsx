import { View, Text } from 'react-native'
import React from 'react'
import { getUsers } from './users'

const Home = () => {

    const getUsersData = async () => {
        const userResponse = await getUsers({ limit: 10, page: 1 })
        if (userResponse.code === 'error') {
            console.log(userResponse.error.message)
        } else {
            userResponse.data.map(user => console.log(user.id, " => ", user.name))
        }
    }

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home