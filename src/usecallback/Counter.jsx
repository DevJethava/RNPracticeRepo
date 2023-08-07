import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

const Counter = ({ id, count }) => {
    console.log(`Rendering Counter - ${id}`)
    return (
        <Text>Count {id} - {count}</Text>
    )
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

export default Counter;