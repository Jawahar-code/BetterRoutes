import React, { useCallback, useState } from 'react';

import { AuthLandingScreen } from '../screens/Auth/AuthLandingScreen';
import { SplashScreen } from '../screens/SplashScreen/SplashScreen';

type RootRoute = 'splash' | 'auth';

export function RootNavigator() {
    const [route, setRoute] = useState<RootRoute>('splash');
    const showAuth = useCallback(() => setRoute('auth'), []);

    if (route === 'splash') {
        return <SplashScreen onFinished={showAuth} />;
    }

    return <AuthLandingScreen />;
}

