import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './LogoStyles';
import batLogo from '../../../assets/bat-logo.png';

export function Logo() {
    return (
        <View>
            <Text style={styles.title}>BAT PASS GENERATOR</Text>
            <Image source={batLogo} style={styles.logo} />
        </View>
    );
}