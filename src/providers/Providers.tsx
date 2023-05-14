import React, {PropsWithChildren} from 'react';

import {SafeAreaProvider} from './SafeAreaProvider';
import {StatusBarProvider} from './StatusBarProvider';

export const Providers: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaProvider>
      <StatusBarProvider>{children}</StatusBarProvider>
    </SafeAreaProvider>
  );
};
