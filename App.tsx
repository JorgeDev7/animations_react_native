import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animation1 from './src/components/Animation1';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Animation1 />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 100
  }
});

export default App;
