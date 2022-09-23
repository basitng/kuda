import React from "react";
import { View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons, Feather, Fontisto } from "@expo/vector-icons";
import Home from "./src/screens/HomeScreen";
import TransactionDetail from "./src/screens/TransactionDetail";
import { primaryColor } from "./colors";
import BudgetScreen from "./src/screens/BudgetScreen";
import MoreScreen from "./src/screens/MoreScreen";
import PaymentScreen from "./src/screens/PaymentScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        activeColor={primaryColor}
        inactiveColor="#555"
        shifting={false}
        barStyle={{
          backgroundColor: "#fff",
          borderTopColor: "#ccc",
          borderTopWidth: 3,
          opacity: 1,
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <Ionicons
                name="ios-home-outline"
                size={24}
                color={primaryColor}
              />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Payments"
          options={{
            tabBarLabel: "Payments",
            tabBarIcon: () => <Feather name="send" size={24} color="grey" />,
          }}
          component={PaymentScreen}
        />

        <Tab.Screen
          name="budgets"
          options={{
            tabBarLabel: "Budgets",
            tabBarIcon: () => (
              <Feather name="pie-chart" size={24} color="grey" />
            ),
          }}
          component={BudgetScreen}
        />
        <Tab.Screen
          name="cards"
          options={{
            tabBarLabel: "Cards",
            tabBarIcon: () => (
              <Feather name="credit-card" size={24} color="grey" />
            ),
          }}
          component={BudgetScreen}
        />
        <Tab.Screen
          name="mores"
          options={{
            tabBarLabel: "More",
            tabBarIcon: () => (
              <Fontisto name="nav-icon-grid-a" size={24} color="grey" />
            ),
          }}
          component={MoreScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
