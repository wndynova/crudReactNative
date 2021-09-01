import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, View, Text, TextInput } from 'react-native';
import COLORS from '../constants/color';
import { Button } from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';


// import { Container } from './styles';

const AddData =() => {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const submit =() => {
        const user ={
            firstName, 
            lastName, 
            age,
        }
        
        Axios.post('https://simple-contact-crud.herokuapp.com/contact', user)
        .then(res => {
            console.log('res:', res);
            setFirstName('');
            setLastName('');
            setAge('');
        })
        
    }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <StatusBar barStyle='default' />
        <View style={{padding: 16}}>
            <TouchableOpacity
                onPress={() => navigation.goBack() }
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
            }}>Add Data</Text>
        </View>

        <View style={{
            padding: 16,
            //borderWidth: 0.5,

        }}>
            <TextInput 
                style={{
                    padding: 15,
                    borderWidth: 0.5,
                    borderColor: COLORS.grey,
                    borderRadius: 10,
                }}
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
                placeholder='First Name'

            />
            <TextInput 
                style={{
                    marginTop: 10,
                    padding: 15,
                    borderWidth: 0.5,
                    borderColor: COLORS.grey,
                    borderRadius: 10,
                }}
                value={lastName}
                onChangeText={(value) => setLastName(value)}
                placeholder='Last Name'
            />
            <TextInput 
                style={{
                    marginTop: 10,
                    padding: 15,
                    borderWidth: 0.5,
                    borderColor: COLORS.grey,
                    borderRadius: 10,
                }}
                value={age}
                onChangeText={(value) => setAge(value)}
                //keyboardType='number-pad'
                placeholder='Age'
            />
            <View style={{
                marginTop: 20
            }}>
                <Button 
                    onPress={submit}
                    block
                    style={{
                        backgroundColor: COLORS.buttonColor,
                        borderRadius: 20
                    }}>
                    <Text style={{
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize: 16,
                        letterSpacing: -0.5
                    }}>Create Data</Text>
                </Button>
            </View>
        </View>

    </SafeAreaView>
  );
}

export default AddData
