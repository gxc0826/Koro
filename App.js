import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './Main'
import Song from './Song'

const a = createStackNavigator()

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <a.Navigator 
                  initialRouteName={"主页"}>
                    <a.Screen 
                        name="主页" 
                        component={Main}>
                    </a.Screen>

                    <a.Screen 
                        name="单曲" 
                        component={Song}>
                    </a.Screen>
                </a.Navigator>
            </NavigationContainer>
        )
    }
}