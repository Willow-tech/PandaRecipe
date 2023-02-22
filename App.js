import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator, Container } from "./src/Navigation/TabBar";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { GameProvider } from "./src/Provider/GameProvider";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

export default function App() {


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GameProvider>
          <NavigationContainer>
            <TabNavigator/>
          </NavigationContainer>
        </GameProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}