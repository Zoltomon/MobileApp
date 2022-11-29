import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput } from "react-native";
import Constants from "expo-constants";

export function PageReg ({navigation}){
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const onSubmitFormHandler = async () => {
        try {

             const responsePost = await axios.post(`https://test-api.easy4.ru/create-user`, {
                login,
                password,
                roleName: "Клиент",
             });

            if (responsePost.status === 200) {
                navigation.reset(
                    {
                    index: 0,
                    routes: [{name: 'Клиентская панель'}]
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
            <TextInput placeholder="Введите пароль..." style={styleLogIn.txbStyle} value={password} onChangeText={onPasswordHandler} />
          </View>
  
          <View>
            <Button title="Зарегистрировать" onPress={onSubmitFormHandler} />
          </View>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        container:{
            flex:1,
            paddingTop: 20,
            justifyContent: 'center',
            flexDirection: 'column',
        },
        txbStyle: {
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
);