import React from 'react';

import Navigation from './src/navigation';
import {Providers} from './src/providers';

function App(): JSX.Element {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}

export default App;
