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
      <View style={styles.container}>
        <View style={styles.month}>
          <Text style={{ fontSize: 20, fontFamily: "Inter-Bold" }}>
            &lt; November &gt;
          </Text>
        </View>
        <View style={styles.overall}>
          <HStack space="sm" reversed={false}>
            <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
              <Text style={styles.notFocused}>29</Text>
            </Box>
            <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
              <Text style={styles.notFocused}>30</Text>
            </Box>
            <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
              <Text style={styles.notFocused}>31</Text>
            </Box>
            <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
              <Text style={styles.Focused}>1</Text>
            </Box>
            <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
              <Text style={styles.Focused}>2</Text>
            </Box>
            <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
              <Text style={styles.Focused}>3</Text>
            </Box>
            <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
              <Text style={styles.Focused}>4</Text>
            </Box>
          </HStack>
          <View style={styles.row}>
            <HStack space="sm" reversed={false}>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>5</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>6</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>7</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>8</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>9</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>10</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>11</Text>
              </Box>
            </HStack>
          </View>
          <View style={styles.row}>
            <HStack space="sm" reversed={false}>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>12</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>13</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>14</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>15</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>16</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>17</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>18</Text>
              </Box>
            </HStack>
          </View>

          <View style={styles.row}>
            <HStack space="sm" reversed={false}>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>19</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>20</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>21</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>22</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>23</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>24</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>25</Text>
              </Box>
            </HStack>
          </View>

          <View style={styles.row}>
            <HStack space="sm" reversed={false}>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>26</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>27</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>28</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>29</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.Focused}>30</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.notFocused}>1</Text>
              </Box>
              <Box w="$10" h="$10" bg="$secondary100" borderRadius={5}>
                <Text style={styles.notFocused}>2</Text>
              </Box>
            </HStack>
          </View>
        </View>

        <View style={styles.text}>
          <Text style={{ fontSize: 20, fontFamily: "Inter-Bold" }}>
            My events:
          </Text>
          <Text style={styles.textBody}>
            You currently have no events on your calendar.{" "}
          </Text>
          <Text style={styles.textBody}>
            Try searching the Events page and RSVPing to one!
          </Text>
        </View>
      </View>
    </GluestackUIProvider>
  );
};
export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: "center",
    backgroundColor: "white",
  },
  month: {
    marginTop: 10,
    padding: 10,
    fontSize: 24,
    backgroundColor: PINK,
    borderRadius: 10,
    borderColor: "black",
    width: "85%",
    alignItems: "center",
  },

  overall: {
    paddingTop: 20,
  },
  row: {
    paddingTop: 20,
  },
  text: {
    margin: 10,
    marginTop: 30,
  },
  textBody: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    marginTop: 15,
    textAlign: "center",
  },
  Focused: {
    color: "black",
    margin: 2,
    fontFamily: "Inter-Medium",
  },
  notFocused: {
    color: "grey",
    margin: 2,
    fontFamily: "Inter-Medium",
  },
});
