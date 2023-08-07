import React, { useCallback, useState } from 'react';
import {
    Button,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Counter from './Counter';
import MyButton from './MyButton';

const CallbackCounter = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = useCallback(() => {
        setCounterOne(counterOne + 1)
    }, [counterOne])

    const incrementCounterTwo = useCallback(() => {
        setCounterTwo(counterTwo + 1)
    }, [counterTwo])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
            />
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Counter id={"One"} count={counterOne} />
                <MyButton id={"One"} onPress={incrementCounterOne} title='Counter One' />
                <Counter id={"Two"} count={counterTwo} />
                <MyButton id={"Two"} onPress={incrementCounterTwo} title='Counter Two' />
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

export default CallbackCounter;