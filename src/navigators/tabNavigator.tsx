import React from "react";
import HomeScreen from "../screens/HomeScreen";
import searchScreen from "../screens/SearchScreen";
import ticketScreen from "../screens/TicketScreen";
import userAccountScreen from "../screens/UserAccountScreen";
import { COLORS, FONTSIZE, SPACING } from "../theme/theme";
import CustomIcon from "../components/CustomIcon";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name="Home" component={homeScreen}/>
        <Tab.Screen name="Search" component={searchScreen}/>
        <Tab.Screen name="Ticket" component={ticketScreen}/>
        <Tab.Screen name="User" component={userAccountScreen}/>
    </Tab.Navigator>;
};

const style = StyleSheet.create({});

export default TabNavigator;