import React from "react";
import { GluestackUIProvider, Image } from "@gluestack-ui/themed";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  //Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
  size,
  variant,
  SelectIcon,
  ChevronDownIcon,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
} from "@gluestack-ui/themed";
// import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { useState } from "react";
import { HStack, VStack, Box } from "@gluestack-ui/themed";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

const Calendar = () => {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.month}>
        <Text>November</Text>
      </View>
      <View style={styles.overall}>
        <HStack space="sm" reversed={false}>
          <Box w="$10" h="$10" bg="$blue300" />
          <Box w="$10" h="$10" bg="$blue300" />
          <Box w="$10" h="$10" bg="$blue300" />
          <Box w="$10" h="$10" bg="$blue300" />
          <Box w="$10" h="$10" bg="$blue300" />
          <Box w="$10" h="$10" bg="$blue300" />
          <Box w="$10" h="$10" bg="$blue300" />
        </HStack>
        <View style={styles.row1}>
          <HStack space="sm" reversed={false}>
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
          </HStack>
        </View>
        <View style={styles.row2}>
          <HStack space="sm" reversed={false}>
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
          </HStack>
        </View>

        <View style={styles.row3}>
          <HStack space="sm" reversed={false}>
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
          </HStack>
        </View>

        <View style={styles.row4}>
          <HStack space="sm" reversed={false}>
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
          </HStack>
        </View>

        {/* <Box h="$80" justifyContent="center">
          <VStack space="sm" reversed={false}>
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
            <Box w="$10" h="$10" bg="$blue300" />
          </VStack>
  </Box>*/}
      </View>

      <View style={styles.text}>
        <Text>My events:</Text>
        <Text>You currently have no events on your calendar. </Text>
        <Text>Try searching the Events page and RSVPing to one!</Text>
      </View>
    </GluestackUIProvider>
  );
};
export default Calendar;
//export default () => <HStack />;

const styles = StyleSheet.create({
  month: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },

  overall: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  row1: {
    paddingTop: 20,
  },

  row2: {
    paddingTop: 20,
  },

  row3: {
    paddingTop: 20,
  },

  row4: {
    paddingTop: 20,
  },

  text: {
    paddingTop: 30,
    paddingLeft: 20,
  },
});
