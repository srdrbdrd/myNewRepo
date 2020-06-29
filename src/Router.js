import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Login,SignUp,Archives,Posts} from './pages'
import Provider from './context/Provider'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Main(){
    return(
        <Tab.Navigator initialRouteName="Posts">
            <Tab.Screen name="Archives" component={Archives}/>
            <Tab.Screen name="Posts" component={Posts}/>
        </Tab.Navigator>
    )
}

function Router() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
      
    );
}
export default Router