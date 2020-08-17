import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import PayButtom from "./components/PayButton";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Pay from "./pages/Pay";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: "home-variant",
  },
  Wallet: {
    lib: AntDesign,
    name: "wallet",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay") {
            return (
              <PayButtom
                focused={focused}
                onPress={() => navigation.navigate("Pay")}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#fff",
        },
        activeTintColor: "#006533",
        inactiveTintColor: "#788188",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Ínicio",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: "Carteira",
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notificações",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
}
