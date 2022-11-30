import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import Constants from "expo-constants";

export function PageMain({navigation}){
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const VisioUser = async () => {
            const responseGet = await axios.get(`https://test-api.easy4.ru/users?pageSize=30`, {});
    }
    
    return(
        <ScrollView>
        <View style={styleLogIn.container}>
            <Button onPress={VisioUser} title="Отобразить"/>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        container:{
            margin: 5
        },
        txbStyle: {
            marginLeft: 10,
        },
        cover: {
            width: 100,
            height: 100,
            borderRadius: 10
          }
    }
);