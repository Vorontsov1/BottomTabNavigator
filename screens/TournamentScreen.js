import {View, Text, StyleSheet, Button} from 'react-native';

const TournamentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Button title="Go to Main " onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TournamentScreen;
