// PE01 - Hello World
// Shows my name, degree program, and school on a yellow screen.
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // One View holds the three Text lines
    <View style={styles.container}>
      <Text>Lanxi Luo</Text>
      <Text>MSCS</Text>
      <Text>STC</Text>
    </View>
  );
}

// Yellow background, content centered both ways
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});