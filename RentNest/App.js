import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './component/Intro';

const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen 
        name="RentNest"
        component={Intro}
        options={
          {title:null,
            headerShown:false
          }
          
        }
        />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

