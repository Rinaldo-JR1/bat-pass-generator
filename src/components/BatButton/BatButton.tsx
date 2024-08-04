import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { PasswordService } from '../../services/passwordService';

export function BatButton() {
    const [password, setPassword] = useState<string>('');
    function handleGeneratePassword() {
        const service = new PasswordService()
        setPassword(service.generatePassword());
    }
    return (
        <>
            <BatTextInput password={password} />

            <Pressable style={styles.button} onPress={handleGeneratePassword}>
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