import React, { useContext } from 'react';
import {
    Button,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { CountContext, DECREMENT_ACTION, INCREMENT_ACTION, RESET_ACTION } from './GlobalScopApp';

const ComponentA = () => {
    const countContext = useContext(CountContext)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
            />
            <Text>ComponentA</Text>
            <Text>Count - {countContext.count}</Text>
            <Button onPress={() => countContext.dispatch(INCREMENT_ACTION)} title='Increment' />
            <Button onPress={() => countContext.dispatch(DECREMENT_ACTION)} title='Decriment' />
            <Button onPress={() => countContext.dispatch(RESET_ACTION)} title='Reset' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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

export default ComponentA;