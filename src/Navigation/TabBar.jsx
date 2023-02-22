import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../Section/HomePage";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { SecondTab } from "../Section/SecondTab";
import { Ajouter } from "../Section/Ajouter";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 26, height: 36, marginBottom:6}}
              source={require('../img/image1.png')}
            />
          ),
        }}
        name="Dessert"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 34, height: 28}}
              source={require('../img/image0.png')}
            />
          ),
        }}
        name="Repas"
        component={SecondTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 42, height: 36}}
              source={require('../img/image2.png')}
            />
          ),
        }}
        name="Ajouter"
        component={Ajouter}
      />
    </Tab.Navigator>
  );
}
