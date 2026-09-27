import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BrandMark } from '../../components/BrandMark';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

type SplashScreenProps = {
    onFinished: () => void;
};

export function SplashScreen({ onFinished }: SplashScreenProps) {
    const insets = useSafeAreaInsets();

    useEffect(() => {
        const timeoutId = setTimeout(onFinished, 2500);

        return () => clearTimeout(timeoutId);
    }, [onFinished]);

    return (
        <View
            style={[
                styles.container,
                {
                    paddingBottom: Math.max(insets.bottom, spacing.xl),
                    paddingTop: Math.max(insets.top, spacing.xl),
                },
            ]}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.branding}>
                <BrandMark light />
                <Text style={styles.subtitle}>Dynamic route intelligence</Text>
            </View>
            <Text style={styles.footer}>DELIVERY OPERATIONS, SIMPLIFIED</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.navy,
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xl,
    },
    branding: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    subtitle: {
        color: colors.mist,
        fontSize: 14,
        marginTop: spacing.md,
    },
    footer: {
        ...typography.eyebrow,
        color: colors.teal,
    },
});