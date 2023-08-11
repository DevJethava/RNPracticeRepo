import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import axios from 'axios';

interface ResponseType  {
    response: {
        title: string
    }
}

const DataFetching = () => {

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    const [post, setPost] = useState<ResponseType | null>(null)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                setLoading(false)
                let mResponse: ResponseType = {
                    response: {
                        title: res.data.title
                    }
                }
                setPost(mResponse)
                setError("")
            })
            .catch(error => {
                setLoading(false)
                setPost(null)
                setError("Something went wrong!!")
            })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
            />
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>{loading ? "Loading ...." : post?.response.title}</Text>
                <Text>{error ? error : null}</Text>
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

export default DataFetching;