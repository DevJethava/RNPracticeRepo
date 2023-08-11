import React, { useEffect, useRef, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MutablRef = () => {

    const [timer, setTimer] = useState<number>(0)
    const intervalRef = useRef<NodeJS.Timer | undefined>(undefined)

    const stopTimer = () => {
        clearInterval(intervalRef.current)
    }

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
    }

    useEffect(() => {
        startTimer()

        return () => {
            stopTimer()
        }
    }, [])

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hook Timer - {timer}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Button title='Start' onPress={() => startTimer()} />
                <Button title='Stop' onPress={() => stopTimer()} />
                <Button title='Reset' onPress={() => setTimer(0)} />
            </View>
        </View>
    )
}

export default MutablRef

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})