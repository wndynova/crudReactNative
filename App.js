
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import AddData from './src/AddData';
import EditData from './src/EditData';


const Stack = createStackNavigator();

const App =() => {
  // useEffect(() => {
  //   //call api default
  //   fetch('https://simple-contact-crud.herokuapp.com/contact')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

  //   //with post
  //   fetch('https://simple-contact-crud.herokuapp.com/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     }
  //   })

  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={({navigation, route}) => ({
          headerShown: false
        })} />
        <Stack.Screen name='Add' component={AddData} options={({navigation, route}) => ({
          headerShown: false
        })}/>
        <Stack.Screen name='Edit' component={EditData} options={({navigation, route}) => ({
          headerShown: false
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
