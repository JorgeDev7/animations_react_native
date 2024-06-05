import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';

export default function Animation3() {

    const [animation] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 40, // al valor que llega la animación
                duration: 500, // cantidad de tiempo en llegar
                useNativeDriver: false
            }
        ).start(); // iniciar la animación
    }, []);

    return (
        <View>
            <Animated.Text
                style={[
                    styles.text,
                    { fontSize: animation }
                ]}
            >Animación 3</Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});