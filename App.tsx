import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="REORDER" component={Home} />
        <Tab.Screen name="CART" component={Home} />
        <Tab.Screen name="ACCOUNT" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
