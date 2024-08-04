import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from 'react-native';
import { styles } from "./Style";
import { Logo } from "../../components/Logo/Logo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";


export const Home = () => {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContaier}>
                <Logo />
            </View>
            <View>
                <BatTextInput />
            </View>
            <Text>Home Screen</Text>
            <StatusBar style="auto" />
        </View>
    );
}

