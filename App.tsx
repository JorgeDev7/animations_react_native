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
// import Animation4 from './src/components/Animation4';
// import Animation5 from './src/components/Animation5';
// import Animation6 from './src/components/Animation6';
import Animation7 from './src/components/Animation7';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        {/* <Animation1 /> */}
        {/* <Animation2 /> */}
        {/* <Animation3 /> */}
        {/* <Animation4 /> */}
        {/* <Animation5 /> */}
        {/* <Animation6 /> */}
        <Animation7 />
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
