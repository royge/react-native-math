/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NitroModules } from 'react-native-nitro-modules'
import type { Math } from '../src/specs/Math.nitro'

// Get your Math module
const MathModule = NitroModules.createHybridObject<Math>('Math')

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>145.67 + 289.73 = { MathModule.add(145.67, 289.73) }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
