import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, View, Text, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constants/color';
import { Button } from 'native-base';


// import { Container } from './styles';

const EditData=({route, navigation}) => {
  //const navigation = useNavigation();
  const {item} = route.params;
  const [user, setUser] = useState({
    firstName: item.firstName,
    lastName: item.lastName,
    age: item.age,
  })
  

  const onChangeFirstName = (value) => {
    setUser({ ...user, firstName: value})
  };

  const onChangeLastName = (value) => {
    setUser({ ...user, lastName: value})
  };

  const onChangeAge = (value) => {
    setUser({ ...user, age: value})
  }

  const updateData =() => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('https://simple-contact-crud.herokuapp.com/contact/'+item.id, {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age.toString(),
      }),
    })
    .then((response) => {
      response.text();
      navigation.push('Home')
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  }

  const deleteData =() => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('https://simple-contact-crud.herokuapp.com/contact/'+item.id, {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age.toString(),
      }),
    })
    .then((response) => {
      response.text();
      navigation.push('Home')
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  }



  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <StatusBar barStyle='default'/>
      <View style={{padding: 16}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 16}}>
        <Text style={{
          color: COLORS.black,
          fontSize: 25,
          fontWeight: 'bold',
          letterSpacing: -0.5
        }}>Edit Data</Text>
      </View>
      <View style={{padding: 16}}>
        <TextInput 
          style={{
            padding: 15,
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            borderRadius: 10,
          }}
          onChangeText={(value) => onChangeFirstName(value)}
          placeholder='First Name'
          value={user.firstName}
        />
        <TextInput 
          style={{
            marginTop: 10,
            padding: 15,
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            borderRadius: 10,
          }}
          onChangeText={(value) => onChangeLastName(value)}
          placeholder='Last Name'
          value={user.lastName}
        />

        <TextInput 
          style={{
            marginTop: 10,
            padding: 15,
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            borderRadius: 10,
          }}
          onChangeText={(value) => onChangeAge(value)}
          placeholder='Age'
          //keyboardType='number-pad'
          value={user.age.toString()}
        />

        <View style={{marginTop: 20}}>
          <Button
            onPress={updateData}
            transparent
            block
            >
            <Text style={{
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: 16,
              letterSpacing: -0.5
            }}>Update Data</Text>
          </Button>

          <Button 
            onPress={deleteData}
            block
            style={{
              marginTop: 10,
              borderRadius: 20}}
            >
            <Text style={{
              color: COLORS.white,
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: -0.5
            }}>Delete Data</Text>
          </Button>
        </View>
      </View>
      {/* <View style={{padding: 16}}>
        <TextInput
          style={{
            padding: 15,
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            borderRadius: 10}}
          placeholder='First Name'
        />
        <TextInput 
          style={{
            marginTop: 10,
            padding: 15,
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            borderRadius: 10
          }}
          placeholder='Last Name'
        />
        <TextInput 
          style={{
            marginTop: 10,
            padding: 15,
            borderWidth: 0.5,
            borderColor: COLORS.grey,
            borderRadius: 10
          }}
          placeholder='Age'
        />
        <View style={{marginTop: 20}}>
          <Button
            block
            style={{
              backgroundColor: COLORS.buttonColor,
              borderRadius: 20
            }}
          >
            <Text style={{
              color: COLORS.white,
              fontWeight: 'bold',
              fontSize: 16,
              letterSpacing: -0.5,
            }}>Save Data</Text>
          </Button>
        </View>
      </View> */}

    </SafeAreaView>
  );
}

export default EditData;

