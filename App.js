import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Screens
import DrawerCustom from "./src/components/draweNavigation/drawerNavigation";
import HomeScreen from "./src/screen/home";
import LoginPage from "./src/screen/auth/login";
import RegisterPage from "./src/screen/auth/register";
import GetStartedPage from "./src/welcomesecreen/getstart";
import WelcomePage from "./src/welcomesecreen/welcome";

//Style
import stylesDrawer from "./src/components/draweNavigation/styles";

export default function App() {
  const HompageDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#6379F4",
        }}
        drawerContent={(props) => <DrawerCustom {...props} />}
        drawerStyle={stylesDrawer.drawer}
        sceneContainerStyle={stylesDrawer.sceneContainer}
      >
        <Drawer.Screen name="🏚 Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen
          name="GetStarted"
          component={GetStartedPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HompageDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
