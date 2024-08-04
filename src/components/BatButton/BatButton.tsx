import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
    return (
        <>
            <Pressable style={styles.button} onPress={() => {
                console.log('Button pressed');
            }}>
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => {
                console.log('Button pressed');
            }}>
                <Text style={styles.text}>⚡ Copy</Text>
            </Pressable>

        </>
    );
}