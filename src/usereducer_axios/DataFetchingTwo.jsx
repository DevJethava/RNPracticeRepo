import React, { useEffect, useReducer, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import axios from 'axios';

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const FETCH_SUCCES = "fetch_success"
const FETCH_ERROR = "fetch_error"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCES:
            return {
                loading: false,
                error: "",
                post: action.payload
            }
        case FETCH_ERROR:
            return {
                loading: false,
                error: "Something went wrong!!",
                post: {}
            }
        default:
            return state
    }
}

const DataFetchingTwo = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                dispatch({ type: FETCH_SUCCES, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FETCH_ERROR })
            })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
            />
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>{state.loading ? "Loading ...." : state.post.title}</Text>
                <Text>{state.error ? state.error : null}</Text>
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

export default DataFetchingTwo;