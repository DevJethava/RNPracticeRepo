import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import axios from 'axios';

const DataFetching = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError("")
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError("Something went wrong!!")
            })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
            />
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>{loading ? "Loading ...." : post.title}</Text>
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