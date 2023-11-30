import { useCallback } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
//import { Themes } from “./assets/Themes”;

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Themes } from "./assets/Themes";
import Header from "./app/components/Header";
import Body from "./app/components/Body";
import Footer from "./app/components/Footer";
import EventBody from "./app/components/EventBody";
import { GluestackUIProvider} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

/* Keep the splash screen visible while we fetch resources */
SplashScreen.preventAutoHideAsync();

/* This is the home screen used for the navigation system, we'll
 * learn more about in the coming weeks!
 */
function HomeScreen() {
  /* TODO: insert your code here */
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="EventDetails" component={EventDetails} options={{title:"Event Details"}} />
      </Stack.Navigator>
    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={styles.container}>
    <Header />
    <Body navigation={navigation} />
    </View>
  );
}

function EventDetails() {
  return (
    <View style={styles.container}>
    {/* <Header /> */}
    <EventBody />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
    "Corben": require("./assets/Fonts/Corben-Regular.ttf"),
    "Corben-Bold": require("./assets/Fonts/Corben-Bold.ttf"),
    "Inter": require("./assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/Fonts/Inter-Bold.ttf"),
    "Inter-Black": require("./assets/Fonts/Inter-Black.ttf"),
    "Inter-ExtraBold": require("./assets/Fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/Fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/Fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/Fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/Fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/Fonts/Inter-Thin.ttf"),
    // Arial: require("./assets/Fonts/Arial.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  console.log("App");
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={() => <Footer />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          {/* <Tab.Screen name="Home" component={ChatScreen} />
          <Tab.Screen name="Home" component={BoardScreen} />
          <Tab.Screen name="Home" component={ConnectScreen} />
          <Tab.Screen name="Home" component={AccountScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    // alignItems: "center",
    justifyContent: "center",
  },
});


