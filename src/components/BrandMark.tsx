import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

type BrandMarkProps = {
    light?: boolean;
};

export function BrandMark({ light = false }: BrandMarkProps) {
    return (
        <View style={styles.wrapper}>
            <View style={[styles.mark, light && styles.markLight]}>
                <View style={[styles.routeLine, light && styles.routeLineLight]} />
                <View style={[styles.routeDot, light && styles.routeDotLight]} />
            </View>
            <Text style={[styles.wordmark, light && styles.wordmarkLight]}>
                BetterRoutes
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    mark: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 22,
        height: 88,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 88,
    },
    markLight: {
        backgroundColor: colors.navy,
    },
    routeLine: {
        borderColor: colors.blue,
        borderRadius: 20,
        borderWidth: 5,
        height: 42,
        transform: [{ rotate: '-38deg' }],
        width: 28,
    },
    routeLineLight: {
        borderColor: colors.teal,
    },
    routeDot: {
        backgroundColor: colors.teal,
        borderColor: colors.white,
        borderRadius: 7,
        borderWidth: 3,
        bottom: 20,
        height: 14,
        position: 'absolute',
        right: 22,
        width: 14,
    },
    routeDotLight: {
        borderColor: colors.navy,
    },
    wordmark: {
        color: colors.navy,
        fontSize: 18,
        fontWeight: '700',
        marginTop: 12,
    },
    wordmarkLight: {
        color: colors.white,
    },
});