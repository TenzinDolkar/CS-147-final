import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";
import { Tabs } from "expo-router";

export default function Chat() {
  const item = useLocalSearchParams();

  //  console.log("item:", item);

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Chat", // https://reactnavigation.org/docs/headers#adjusting-header-styles
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
        }}
      />
      <WebView source={{ uri: item.externalUrl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
});
