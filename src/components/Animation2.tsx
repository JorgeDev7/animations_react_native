import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

export default function Animation2() {

    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 450, // al valor que llega la animación
                duration: 1000, // cantidad de tiempo en llegar
                useNativeDriver: false
            }
        ).start(); // iniciar la animación
    }, []);

    return (
        <Animated.View
            style={[
                styles.box,
                {
                    width: animation,
                    height: animation
                }
            ]}
        >

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});