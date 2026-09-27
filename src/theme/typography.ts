import { TextStyle } from 'react-native';

export const typography: Record<string, TextStyle> = {
    eyebrow: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1.4,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 38,
    },
    body: {
        fontSize: 16,
        lineHeight: 25,
    },
    button: {
        fontSize: 16,
        fontWeight: '700',
    },
};