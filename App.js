import { useCallback } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
//import { Themes } from “./assets/Themes”;

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Themes } from "./assets/Themes";
import Header from "./app/components/Header";
import Body from "./app/components/Body";
import Footer from "./app/components/Footer";

/* Keep the splash screen visible while we fetch resources */
SplashScreen.preventAutoHideAsync();

/* This is the home screen used for the navigation system, we'll
 * learn more about in the coming weeks!
 */
function HomeScreen() {
  /* TODO: insert your code here */
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={() => <Footer />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useStyles, createStyles } from "styles";

export interface TitleBarProps {
  testID?: string;
}

export function TitleBar(props: TitleBarProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.titleBar} testID="14:5" />
      <Text style={styles.kithKin} testID="22:47">
        {`kith&kin`}
      </Text>
    </View>
  );
}

const stylesheet = createStyles((theme) => ({
  root: {
    width: 393,
    height: 92,
    flexShrink: 0,
  },
  titleBar: {
    width: 393,
    height: 92,
    flexShrink: 0,
    backgroundColor: theme.colors.fuschia60,
  },
  kithKin: {
    width: 201,
    height: 85,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    color: "rgba(56, 127, 88, 1)",
    textAlign: "center",
    fontFamily: "Corben",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "400",
  },
}));



*/
