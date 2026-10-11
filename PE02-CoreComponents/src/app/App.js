import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.icon}
      />

      <View style={styles.inputSection}>
        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput style={styles.input} placeholder="ex. CS624" />
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Core Requirements (24 credits)</Text>
        <Text style={styles.course}>CS 504 Software Engineering</Text>
        <Text style={styles.course}>CS 506 Programming for Computing</Text>
        <Text style={styles.course}>CS 519 Cloud Computing</Text>
        <Text style={styles.course}>AI 520 Natural Language Processing for Artificial Intelligence</Text>
        <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
        <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text style={styles.course}>AI 510 Artificial Intelligence in Cloud Computing</Text>
        <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Depth of Study (6 Credits)</Text>
        <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
        <Text style={styles.course}>CS 628 Full-Stack Development - Web Application</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Capstone (3 Credits)</Text>
        <Text style={styles.course}>CS 687 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingTop: 40,
    paddingBottom: 140,
  },
  icon: {
    width: 200,
    height: 200,
    marginLeft: 40,
  },
  inputSection: {
    marginTop: 30,
  },
  label: {
    fontSize: 18,
  },
  input: {
    height: 40,
    marginHorizontal: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  section: {
    marginTop: 30,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  },
  course: {
    fontSize: 18,
  },
});

export default App;