import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Login,SignUp,Archives,Posts, SplashScreen} from './pages'
import Provider from './context/Provider'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Main(){
    return(
        <Tab.Navigator tabBarOptions = {{activeBackgroundColor:"#55a752",inactiveBackgroundColor:"#004a00",labelPosition:'beside-icon',activeTintColor: '#000000',keyboardHidesTabBar:true}} initialRouteName="Main">
            <Tab.Screen name="Archives" component={Archives}/>
            <Tab.Screen name="Posts" component={Posts}/>
        </Tab.Navigator>
    )
}
//Yeşil tonlu tasarım tercih ettik.
function Router() {
    return (
        <Provider>
            <NavigationContainer> 
                <Stack.Navigator screenOptions={{
                    
                                headerStyle: {
                                backgroundColor: '#004a00',
                                
                                },
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                fontWeight: 'bold',
                                headerTitleAlign: 'center'
                                },
                            }} initialRouteName="Splash"> 
                    <Stack.Screen options={{ title: 'Hoşgeldiniz' }} name="Splash" component = {SplashScreen}/>
                    <Stack.Screen options={{ title: 'Giriş' }} name="Login" component={Login} />
                    <Stack.Screen options={{ title: 'Kayıt Ol' }} name="SignUp" component={SignUp} />
                    <Stack.Screen options={{ title: 'Post IT!' }} name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
      
    );
}
export default Router

