import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from 'react-native';
import { styles } from "./Style";
import { Logo } from "../../components/Logo/Logo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export const Home = () => {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContaier}>
                <Logo />
            </View>

            <View style={styles.inputTextContainer}>
                <BatButton />
            </View>
            <StatusBar style="light" />
        </View>
    );
}

