import React, { useEffect, useRef } from 'react'
import { View, Text, TextInput } from 'react-native'

const DomRef = () => {

    const inputRef = useRef<TextInput>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <View style={{ width: "100%", padding: 16 }}>
            <TextInput style={{ borderColor: '#000000', borderWidth: 1, padding: 8 }} placeholder='Enter here ....' inputMode='text' ref={inputRef} />
        </View>
    )
}

export default DomRef