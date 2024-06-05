import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import Animation1 from './src/components/Animation1';
// import Animation2 from './src/components/Animation2';
// import Animation3 from './src/components/Animation3';
import Animation4 from './src/components/Animation4';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        {/* <Animation1 /> */}
        {/* <Animation2 /> */}
        {/* <Animation3 /> */}
        <Animation4 />
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
