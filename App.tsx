import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Button} from './src/components';

function App(): JSX.Element {
  return (
    <View style={styles.app}>
      <Button text="Testing!!" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
