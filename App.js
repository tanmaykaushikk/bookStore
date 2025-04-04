import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./src/screens/Landing.tsx";
import Wishlist from "./src/screens/Wishlist";
import Cart from "./src/screens/Cart.tsx";
import Successful from "./src/screens/Successful.tsx";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Search from "./src/screens/Search.tsx";
import SignupScreen from "./src/screens/SignupScreen.tsx";
import LoginScreen from "./src/screens/LoginScreen.tsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Successful" component={Successful} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
