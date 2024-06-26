import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

export default function Animation1() {

    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 1, // al valor que llega la animación
                duration: 500, // cantidad de tiempo en llegar
                useNativeDriver: true
            }
        ).start(); // iniciar la animación
    }, []);

    return (
        <Animated.View
            style={{
                opacity: animation
            }}
        >
            <Text style={styles.text}>Animación 1</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});