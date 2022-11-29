import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput, Image } from "react-native";
import Constants from "expo-constants";

export function PageMain(){

    return(
        <ScrollView>
        <View style={styleLogIn.viewStyle}>
        <Image style={styleLogIn.cover} source={require('../assets/Polzovatel.png')}/>
            <Text>Меню пользователя </Text>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        viewStyle:{
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