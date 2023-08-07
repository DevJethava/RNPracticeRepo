import React, { useReducer } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = React.createContext()
export const INCREMENT_ACTION = "increment"
export const DECREMENT_ACTION = "decrement"
export const RESET_ACTION = "reset"

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case INCREMENT_ACTION:
            return state + 1
        case DECREMENT_ACTION:
            return state - 1
        case RESET_ACTION:
            return initialState
        default:
            return state
    }
}

const GlobalScopApp = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{ count, dispatch }}>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle={'dark-content'}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text>App Count - {count}</Text>
                </View>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </SafeAreaView>
        </CountContext.Provider>
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

export default GlobalScopApp;
