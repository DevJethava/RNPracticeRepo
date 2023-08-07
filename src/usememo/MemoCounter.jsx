import React, { useMemo, useState } from 'react';
import {
    Button,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const MemoCounter = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
            />
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Count One - {counterOne}</Text>
                <Text>{isEven ? 'Even' : 'Odd'}</Text>
                <Button onPress={incrementCounterOne} title='Counter One' />
                <Text>Count Two - {counterTwo}</Text>
                <Button onPress={incrementCounterTwo} title='Counter Two' />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default MemoCounter;