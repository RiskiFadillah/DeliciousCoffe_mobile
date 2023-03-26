import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Screens
import DrawerCustom from "./src/components/draweNavigation/drawerNavigation";
import HomeScreen from "./src/screen/home";
import LoginPage from "./src/screen/auth/login";
import RegisterPage from "./src/screen/auth/register";
import GetStartedPage from "./src/welcomesecreen/getstart";
import WelcomePage from "./src/welcomesecreen/welcome";
import FavoriteProduct from "./src/screen/favoriteProducts";
import DetailProduct from "./src/screen/detailProduct";
import CartProduct from "./src/screen/cart";
import CheckoutProduct from "./src/screen/checkOut";
import PaymentScreen from "./src/screen/Payment";
import StatusPayment from "./src/screen/statusPayment";
import MyProfile from "./src/screen/userProfile/myProfile";
import EditProfile from "./src/screen/userProfile/editProfile";
import HistoryProduct from "./src/screen/history";

//Style
import stylesDrawer from "./src/components/draweNavigation/styles";

export default function App() {
  const HompageDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#6A4029",
          drawerActiveBackgroundColor: "#fff",
        }}
        drawerContent={(props) => <DrawerCustom {...props} />}
        drawerStyle={stylesDrawer.drawer}
        sceneContainerStyle={stylesDrawer.sceneContainer}
      >
        <Drawer.Screen name="🏚 Home" component={HomeScreen} />
        <Drawer.Screen name="🛒 Orders" component={CartProduct} />
        <Drawer.Screen name="😊 Edit Profile" component={MyProfile} />
        <Drawer.Screen name="📃 Privacy policy" component={FavoriteProduct} />
        <Drawer.Screen name="🛡 Security" component={FavoriteProduct} />
      </Drawer.Navigator>
    );
  };
  return (
    <Provider store={store}>
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
          <Stack.Screen name="Favorite-Product" component={FavoriteProduct} />
          <Stack.Screen
            name="Detail-Product"
            component={DetailProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart-Product"
            component={CartProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout-Product"
            component={CheckoutProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment-Method"
            component={PaymentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Status-Payment"
            component={StatusPayment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="My Profile"
            component={MyProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="History"
            component={HistoryProduct}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
