import React from "react";
import { TouchableOpacity, TextInput, View, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { EvilIcons, Feather } from "@expo/vector-icons";

import Main from '../Main'
import List from '../List'

const Stack = createStackNavigator()

const optionsHeader = ({ navigation })=>({
    title: "Mercado Livre",
    headerStyle: {
       backgroundColor: "#ffe600",
    },
    headerTintColor: "#000",
    headerTitle: () => (),
    headerLeft:()=>(
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.toggleDrawer()}
          title="Info"
        >
            <Feather name="align-left" size={24} color></Feather>
        </TouchableOpacity>
    ),
    headerRight: () => (),
})

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Main}
                name="Main"
                options={optionsHeader}
            />
        </Stack.Navigator>
    );
}
