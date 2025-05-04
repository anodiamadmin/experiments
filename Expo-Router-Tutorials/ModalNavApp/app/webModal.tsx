import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated'

export default function webModal() {
  return (
    <Animated.View entering={FadeIn} style={styles.modalFadeIn}>
        <Link dismissTo href={"/"} asChild>
            <Pressable style={StyleSheet.absoluteFill} />
        </Link>
        <Animated.View entering={SlideInDown} style={styles.modalSlideInDown}>
            <Text style={styles.modalText}>My web Modal ScReEn!</Text>
            <Link dismissTo href={"/"} asChild>
                <Text>🔙 Go Back </Text>
            </Link>
        </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    modalFadeIn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000040',
        gap: 15,
    },
    modalSlideInDown: {
        width: '20%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#880000',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00ffff',
        marginBottom: 10,
    },
})