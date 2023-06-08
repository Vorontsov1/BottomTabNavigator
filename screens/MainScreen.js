import { View, Text, StyleSheet, Image, ImageBackground, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MainScreen = () => {

  const navigation = useNavigation();

  const goToTrainingScreen = () => {
    navigation.navigate('Training');
  };

  const goToTournamentScreen = () => {
    navigation.navigate('Tournament');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../assets/images/bg.png')}
        resizeMode="cover"
        style={styles.bg}
      />
      <View>
        <Image
          style={styles.logoIcon}
          source={require('../assets/icons/loko_icon.png')}
        />
      </View>
      <View>
        <Text style={styles.lokoText}>Loko team U - 8</Text>
        <Text style={styles.subText}>На сьогодні заплановано 1 тренування</Text>
        <View style={styles.backgrnd}>
          <Image
            style={styles.clock}
            source={require('../assets/icons/clock.png')}
          />
          <Text style={styles.textTime}>05:45:12</Text>
        </View>
      </View>
      <View style={styles.wrapBtn}>
        <TouchableOpacity style={styles.btn} onPress={goToTrainingScreen}>
          <Image
            style={{width: 30, height: 30, marginRight: 10}}
            source={require('../assets/icons/Soccer.png')}
          />
          <Text style={{color: '#B4DA57', fontWeight: '700'}}>
            {' '}
            + Тренування
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={goToTournamentScreen}>
          <Image
            style={{width: 21, height: 24, marginRight: 10}}
            source={require('../assets/icons/Kuboc.png')}
          />
          <Text style={{color: '#FCBF4A', fontWeight: '700'}}> + Турнір</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textEvent}>Актуальні події</Text>
        <Text style={styles.textData}>Сьогодні, 8 червня 2023</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    aspectRatio: 1.5,
  },
  logoIcon: {
    width: 85,
    height: 85,
    alignSelf: 'center',
    marginTop: 10,
  },
  lokoText: {
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    color: '#fff',
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: 12,
    color: '#F4F4F4',
  },
  textTime: {
    padding: 10,
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#fff',
  },
  backgrnd: {
    flexDirection: 'row',
    backgroundColor: 'rgba(244, 244, 244, 0.25)',
    width: 120,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  clock: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    marginLeft: 10,
  },
  wrapBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#2A2B29',
    width: 180,
    height: 53,
    borderRadius: 10,
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEvent: {
    fontSize: 20,
    color: '#2A2B29',
    fontWeight: '600',
    marginTop: 24,
    marginLeft: 16,
  },
  textData: {
    fontSize: 16,
    color: '#88888C',
    fontWeight: '400',
    marginLeft: 16,
    marginTop: 8,
  },
});
export default MainScreen;
