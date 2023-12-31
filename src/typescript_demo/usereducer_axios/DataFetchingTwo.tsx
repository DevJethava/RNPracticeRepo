import React, { useEffect, useReducer } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const FETCH_SUCCES = 'fetch_success';
const FETCH_ERROR = 'fetch_error';

// we can use enum as well like this
// enum FETCH_TYPES {
//     FETCH_SUCCES = 'fetch_success',
//     FETCH_ERROR = 'fetch_error'
// }

type ResponseState = {
    loading: boolean;
    error: string;
    post: {
        name: string;
    };
};

type ResponseAction = {
    type: typeof FETCH_SUCCES | typeof FETCH_ERROR,
    // type: FETCH_TYPES.FETCH_SUCCES | FETCH_TYPES.FETCH_ERROR,
    payload: string
};

const initialState: ResponseState = {
    loading: true,
    error: '',
    post: {
        name: '',
    },
};

const reducer = (
    state: ResponseState = initialState,
    action: ResponseAction,
) => {
    switch (action.type) {
        case FETCH_SUCCES:
            return {
                ...state,
                loading: false,
                post: {
                    name: action.payload,
                },
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: 'Something went wrong!!',
            };
        default:
            return state;
    }
};

const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: FETCH_SUCCES, payload: response.data.title });
            })
            .catch(error => {
                dispatch({ type: FETCH_ERROR, payload: '' });
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <View
                style={[
                    styles.container,
                    { justifyContent: 'center', alignItems: 'center' },
                ]}>
                <Text>{state.loading ? 'Loading ....' : state.post.name}</Text>
                <Text>{state.error ? state.error : null}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
