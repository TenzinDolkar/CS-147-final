import { useCallback } from "react";
import { StyleSheet, Image, Text, View, StatusBar } from "react-native";
//import { Themes } from “./assets/Themes”;

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Themes, Icons } from "./assets/Themes";
import Header from "./app/components/Header";
import Body from "./app/components/Body";
import Calendar from "./app/components/calendar";
import Footer from "./app/components/Footer";
import EventBody from "./app/components/EventBody";

import profileDetail from "./app/components/profileDetail.js";

import Chat, { ChatHistory } from "./app/components/chat";
import Board from "./app/components/board";
import Connect from "./app/components/connect";
import Profile from "./app/components/profile";
import Post from "./app/components/post";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

/* Keep the splash screen visible while we fetch resources */
SplashScreen.preventAutoHideAsync();

const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerMode: "none",
          headerStyle: {
            backgroundColor: PINK,
          },
          headerTintColor: GREEN,
        }}
        options={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{ title: "Event Details", headerShown: true }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ title: "Calendar ", headerShown: true }}
        />
      </Stack.Navigator>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Chat History"
        screenOptions={{
          headerStyle: {
            backgroundColor: PINK,
          },
          headerTintColor: GREEN,
        }}
      >
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat History"
          component={ChatHistory}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

function BoardScreen() {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Board">
        <Stack.Screen
          name="Board"
          component={Board}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{ title: "Post", headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

function ConnectScreen() {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Connect">
        <Stack.Screen
          name="Connect"
          component={Connect}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="profileDetail"
          component={profileDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Body navigation={navigation} />
    </View>
  );
}

function EventDetails({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <EventBody navigation={navigation} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
    Corben: require("./assets/Fonts/Corben-Regular.ttf"),
    "Corben-Bold": require("./assets/Fonts/Corben-Bold.ttf"),
    "Inter-Regular": require("./assets/Fonts/Inter-Regular.ttf"),
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
          // tabBar={() => <Footer />}
          // screenOptions={{
          //   headerShown: false,
          // }}

          //for every workflow in your tab navigator, if there's more than one page, you want to
          //pass in a stack as the component

          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let url;
              if (route.name === "Home") {
                url = focused ? Icons.home.nav : Icons.homeEmpty.nav;
              } else if (route.name === "Chat") {
                url = focused ? Icons.chatFilled.nav : Icons.chat.nav;
              } else if (route.name === "Board") {
                url = focused ? Icons.boardFilled.nav : Icons.board.nav;
              } else if (route.name === "Connect") {
                url = focused ? Icons.connectFilled.nav : Icons.connect.nav;
              } else if (route.name === "Profile") {
                url = focused ? Icons.profileFilled.nav : Icons.profile.nav;
              }

              return <Image source={url} size={size} color={color} />;
              //return <Image source={Icons.home.nav} />;
            },
            //</NavigationContainer>tabBarActiveTintColor: "tomato",
            //tabBarInactiveTintColor: "gray",
          })}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: PINK,
            },
            headerTintColor: GREEN,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerStyle: {
                backgroundColor: PINK,
              },
              headerTintColor: GREEN,
            }}
          />
          <Tab.Screen
            name="Board"
            component={BoardScreen}
            options={{
              headerStyle: {
                backgroundColor: PINK,
              },
              headerTintColor: GREEN,
            }}
          />
          <Tab.Screen
            name="Connect"
            component={ConnectScreen}
            options={{
              headerStyle: {
                backgroundColor: PINK,
              },
              headerTintColor: GREEN,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerStyle: {
                backgroundColor: PINK,
              },
              headerTintColor: GREEN,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    //alignItems: "center",
    justifyContent: "center",
  },
});
