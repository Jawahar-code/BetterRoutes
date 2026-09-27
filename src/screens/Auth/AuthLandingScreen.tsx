import React from 'react';
import { Alert, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BrandMark } from '../../components/BrandMark';
import { branding } from '../../constants/branding';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

function showPlaceholderMessage(action: string) {
    Alert.alert(`${action} coming soon`, 'Authentication will be connected in a future phase.');
}

export function AuthLandingScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, spacing.md) }]}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.content}>
                <BrandMark />
                <Text style={styles.eyebrow}>ROUTE WITH CONFIDENCE</Text>
                <Text style={styles.title}>{branding.tagline}</Text>
                <Text style={styles.description}>{branding.description}</Text>
            </View>
            <View style={styles.actions}>
                <Pressable
                    accessibilityRole="button"
                    onPress={() => showPlaceholderMessage('Log in')}
                    style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
                >
                    <Text style={styles.primaryButtonText}>Log in</Text>
                </Pressable>
                <Pressable
                    accessibilityRole="button"
                    onPress={() => showPlaceholderMessage('Sign up')}
                    style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}
                >
                    <Text style={styles.secondaryButtonText}>Sign up</Text>
                </Pressable>
                <Text style={styles.note}>Authentication setup is coming in a future phase.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cloud,
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    eyebrow: {
        ...typography.eyebrow,
        color: colors.blue,
        marginTop: spacing.xl,
    },
    title: {
        ...typography.title,
        color: colors.ink,
        marginTop: spacing.sm,
        textAlign: 'center',
    },
    description: {
        ...typography.body,
        color: colors.slate,
        marginTop: spacing.md,
        maxWidth: 340,
        textAlign: 'center',
    },
    actions: {
        gap: spacing.sm,
    },
    primaryButton: {
        alignItems: 'center',
        backgroundColor: colors.blue,
        borderRadius: 14,
        minHeight: 56,
        justifyContent: 'center',
    },
    primaryButtonText: {
        ...typography.button,
        color: colors.white,
    },
    secondaryButton: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.mist,
        borderRadius: 14,
        borderWidth: 1,
        minHeight: 56,
        justifyContent: 'center',
    },
    secondaryButtonText: {
        ...typography.button,
        color: colors.navy,
    },
    note: {
        color: colors.muted,
        fontSize: 12,
        marginTop: spacing.xs,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});