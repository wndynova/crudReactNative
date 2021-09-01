import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, SafeAreaView, FlatList, Image, ActivityIndicator, RefreshControl, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import COLORS from '../constants/color';
import { Button, Thumbnail } from 'native-base';
import Axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Home=({navigation}) => {
    //const [data, setData] = useState([]);
    //const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false)
    //const [hasError, setErrors] = useState(false);
    const [user, setUser] = useState()
    
    const getData = async() => {
        setRefresh(true)
        try {
            let response = await fetch('https://simple-contact-crud.herokuapp.com/contact');
            let json = await response.json();
            setUser(json.data);
            console.log('get data: ', json)
            setLoading(false);
            setTimeout(() => {
                setRefresh(false)
            }, 1000)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    
    const renderItem =({item}) => {
        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    padding: 10, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'column', width: '100%',padding: 10}}>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Edit', {item: item})}
                            style={{
                                flexDirection: 'row', 
                                //justifyContent: 'space-between', 
                                alignItems: 'center',
                                
                            }}>
                            <View>
                                <Thumbnail source={{uri: item.photo}}/>
                            </View>
                            <View style={{flexDirection: 'column', marginLeft: 15}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: COLORS.black}}>Name : {item.firstName}</Text>
                                    <Text style={{
                                        marginLeft: 3,
                                        fontSize: 15}}>{item.lastName}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 15, color: COLORS.grey}}>Age: {item.age.toString()} years old</Text>
                                </View>     
                            </View>
                            
                        
                            
                            {/* <View style={{flexDirection: 'row'}}>
                                <Button 
                                    onPress={() => navigation.navigate('Edit')}
                                    transparent>
                                    <Text style={{
                                        marginHorizontal: 10,
                                        color: COLORS.buttonColor, 
                                        fontWeight: 'bold'}}>Edit</Text>
                                </Button>
                                <Button
                                block     
                                style={{ 
                                    backgroundColor: COLORS.primary,
                                    borderRadius: 15,
                                    width: 70}}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: COLORS.white}}>Hapus</Text>
                                </Button>
                            </View> */}
                        </TouchableOpacity>
                        <View style={{
                            borderWidth: 0.5, 
                            marginTop: 15,
                            height:1, 
                            borderColor: COLORS.lightGrey, 
                            width: '100%'}}></View>
                        
                    </View>
                </View>
            </ScrollView>
            
        )
    }
    
    // const getData =() => {
    //     Axios.get('https://simple-contact-crud.herokuapp.com/contact')
    //     .then(res => {
    //         console.log('res get data: ', res)
    //         setUser(res.data)
    //     })
    // }

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={COLORS.primary} />
            </View>
        )
    }

    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar barStyle='default'/>
            {/* header */}
            {/* <View style={{
                flexDirection: 'row',
                padding: 16,
                backgroundColor: COLORS.white
            }}>
                <Text>Cek</Text>
            </View> */}
            <View style={{
                padding: 16
            }}>
                <Text style={{
                    color: COLORS.black,
                    fontSize: 25,
                    letterSpacing: -0.5,
                    fontWeight: 'bold'
                }}>Hello Friend</Text>
                <Text style={{
                    letterSpacing: -0.5,
                    fontSize: 15,
                    color: COLORS.grey}}>Welcome back</Text>
            </View>
            <View style={{padding: 16}}>
                <Text style={{
                    color: COLORS.primary, 
                    fontWeight: 'bold', 
                    letterSpacing: -0.5}}>Display All Data</Text>
            </View>
            <FlatList 
                
                data={user}
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={getData} />
                }
                renderItem={renderItem}
                keyExtractor={(item)=> item.id}
            />
           
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '12%',
                backgroundColor: COLORS.white,
                padding: 10,
                elevation: 4,
                shadowColor: COLORS.black,
                shadowOffset: {
                    height: 0,
                    width:2,
                },
                shadowOpacity: 0.25
            }}>
                <Button 
                    onPress={() => navigation.navigate('Add')}
                    block 
                    style={{borderRadius: 20, backgroundColor: COLORS.buttonColor}}>
                    <Text style={{
                        letterSpacing: -0.5,
                        color: COLORS.white, 
                        fontWeight: 'bold', 
                        fontSize: 15}}>Add Data</Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Home;
