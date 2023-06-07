import {View, Text, StyleSheet, Button} from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>More Screen</Text>
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
export default MoreScreen;
