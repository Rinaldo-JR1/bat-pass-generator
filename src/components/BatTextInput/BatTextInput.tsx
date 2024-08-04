import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface props {
    password: string,

}

export function BatTextInput({ password }: props) {
    return (
        <TextInput style={styles.inputer} placeholder='Password' value={password} />
    );
}