
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './component/Intro';
import Registration from './component/Registration';
import Login from './component/Login';
import Feed from './component/Feed';
import Forgotpass from './component/Forgotpass';
import { View, Text, SafeAreaView, Image,TouchableOpacity } from 'react-native'

const Stack=createNativeStackNavigator();
export default function App({ navigation }) {
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

        <Stack.Screen
          name="registration"
          component={Registration}
          options={
            {title:null,
              headerShown:false
            }
          }
        />

        <Stack.Screen
        name="login"
        component={Login}
        options={
          {title:null,
            headerShown:false
          }
        }
        />
         <Stack.Screen
        name="feed"
        component={Feed}
        options={
          {title:"RentNest",
          headerTitleAlign:'center',
            // headerShown:false
            headerBackVisible:false,
            headerLeft:()=><View>
              <Image
              source={require('./component/images/rentnestlogo.png')}
              style={{width:28,height:28,}} 
              />
            </View>,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text>Menu</Text>
              </TouchableOpacity>
            ),
          }
        }
        />

        <Stack.Screen
        name="forgotpassword"
        component={Forgotpass}
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

