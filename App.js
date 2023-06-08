import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrainingScreen from './screens/TrainingScreen';
import TournamentScreen from './screens/TournamentScreen';
import Tabs from './navigation/tabs';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Training" component={TrainingScreen} />
        <Stack.Screen name="Tournament" component={TournamentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
