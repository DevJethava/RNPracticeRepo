import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DomRef from './DomRef'
import MutablRef from './MutablRef'

const App = () => {
    return (
        <View style={styles.container}>
            {/* <DomRef /> */}
            <MutablRef />
        </View>
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