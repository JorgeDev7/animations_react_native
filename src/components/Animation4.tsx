import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';

export default function Animation4() {

    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 360, // al valor que llega la animación
                duration: 500, // cantidad de tiempo en llegar
                useNativeDriver: false
            }
        ).start(); // iniciar la animación
    }, []);

    const interpolation = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    const animationStyle = {
        transform: [{ rotate: interpolation }]
    };

    return (
        <View>
            <Animated.View
                style={[
                    styles.box,
                    animationStyle
                ]}
            ></Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});