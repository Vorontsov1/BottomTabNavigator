import {View, Text, StyleSheet, Button} from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MainScreen;
