import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import GlobalScopApp from './src/globalscop/GlobalScopApp';
import DataFetching from './src/usereducer_axios/DataFetching';
import DataFetchingTwo from './src/usereducer_axios/DataFetchingTwo';
import MemoCounter from './src/usememo/MemoCounter';
import CallbackCounter from './src/usecallback/CallbackCounter';
import RefCounter from './src/useref/RefCounter';

const App = () => {
    return (
        <>
            <GlobalScopApp />
            {/* <DataFetching /> */}
            {/* <DataFetchingTwo /> */}
            {/* <MemoCounter /> */}
            {/* <CallbackCounter /> */}
            {/* <RefCounter /> */}
        </>
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

export default App;
