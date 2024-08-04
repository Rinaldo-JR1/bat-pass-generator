import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { PasswordService } from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [password, setPassword] = useState<string>('');
    const handleGeneratePassword = () => {
        const service = new PasswordService()
        setPassword(service.generatePassword());
    }
    const handleCopyPassword = async () => {
        await Clipboard.setStringAsync(password);
    }

    return (
        <>
            <BatTextInput password={password} />

            <Pressable style={styles.button} onPress={handleGeneratePassword}>
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleCopyPassword}>
                <Text style={styles.text}>⚡ Copy</Text>
            </Pressable>

        </>
    );
}