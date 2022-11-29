import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import Constants from "expo-constants";

export function PageLogIn({navigation}){
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const onSubmitFormHandler = async () => {
        try {
            const responseGet = await axios.get(`https://test-api.easy4.ru/auth?login=${login}&password=${password}`, {});

            if (responseGet.status === 200) {
                navigation.reset(
                    {
                    index: 0,
                    routes: [{name: 'Окно пользователя'}]
                });
            }else {
                throw new Error("Данные невозможно получить");
            }
        } catch (error) {
            alert(error);
        }
    }
    
    return(
        <ScrollView>
        <View style={styleLogIn.container}>
          <View>
            <TextInput placeholder="Введите логин..." style={styleLogIn.txbStyle} value={login} onChangeText={onLoginHandler}/>
            <TextInput placeholder="Введите пароль..." style={styleLogIn.txbStyle} value={password} onChangeText={onPasswordHandler}/>
          </View>
  
          <View>
            <Button title="Войти" onPress={onSubmitFormHandler} style={styleLogIn.Btn}/>
            <Button title="Зарегистрироваться" onPress={() => navigation.navigate('Регистрация')}/>
          </View>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        container:{
            flex: 1,
            flexDirection: 'column',
            paddingTop: 20,
            width: '100%',
        },
        txbStyle: {
            marginLeft: 10,
            marginTop:10,
        },
        Btn:{
            margin:5,
            width:50,
            backgroundColor:'Red',
        }
    }
);