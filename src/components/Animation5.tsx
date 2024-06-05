import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

export default function Animation5() {

    const [animation] = useState(new Animated.Value(1));

    const pressButton = () => {
        Animated.spring(animation, {
            toValue: .8,
            useNativeDriver: false
        }).start();
    };

    const releaseButton = () => {
        Animated.spring(animation, {
            toValue: 1,
            friction: 4, // control de rebote
            tension: 40,
            useNativeDriver: false
        }).start();
    };

    const animationStyles = {
        transform: [{ scale: animation }]
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPressIn={() => pressButton()}
                onPressOut={() => releaseButton()}
            >
                <Animated.View style={[styles.button, animationStyles]}>
                    <Text
                        style={styles.text}
                    >Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "#FFF",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
});
