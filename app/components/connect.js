import { StyleSheet } from "react-native";
import React from "react";

import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import {
  GluestackUIProvider,
  Image,
  Button,
  ButtonText,
  ButtonIcon,
  set,
} from "@gluestack-ui/themed";

import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
  SearchIcon,
} from "@gluestack-ui/themed";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

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

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Heading,
  Icon,
  CloseIcon,
  ButtonGroup,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";

// export default function Connect() {
const Connect = ({ navigation }) => {
  const [value, setValue] = React.useState("");

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Input
            size={"sm"}
            variant={"rounded"}
            isInvalid={false}
            isDisabled={false}
            style={styles.searchInput}
          >
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField
              onChange={(e) => {
                setValue(e.nativeEvent.text);
              }}
              value={value}
              placeholder="Search all profiles..."
            />
          </Input>
        </View>

        <View style={styles.buttonsBar}>
          <Select
            size={"md"}
            variant={"rounded"}
            isInvalid={false}
            isDisabled={false}
            style={styles.dropDown}
          >
            <SelectTrigger size={size} variant={variant}>
              <SelectInput placeholder="Distance" />
              <SelectIcon
                mr={variant === "underlined" ? 0 : "$3"}
                ml={variant === "underlined" ? "$3" : 0}
                as={ChevronDownIcon}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="<5 mi" value="<5 mi" />
                <SelectItem label="5-10 mi" value="5-10 mi" />
                <SelectItem label="10-20 mi" value="10-20 mi" />
                <SelectItem label=">20 mi" value=">20 mi" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Select
            size={"md"}
            variant={"rounded"}
            isInvalid={false}
            isDisabled={false}
            style={styles.dropDown}
          >
            <SelectTrigger size={size} variant={variant}>
              <SelectInput placeholder="Language" />
              <SelectIcon
                mr={variant === "underlined" ? 0 : "$3"}
                ml={variant === "underlined" ? "$3" : 0}
                as={ChevronDownIcon}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="English" value="English" />
                <SelectItem label="Spanish" value="Spanish" />
                <SelectItem label="French" value="French" />
                <SelectItem label="Chinese" value="Chinese" />
                <SelectItem label="Hindi" value="Hindi" />
                <SelectItem label="Arabic" value="Arabic" />
                <SelectItem label="Portuguese" value="Portuguese" />
                <SelectItem label="Bengali" value="Bengali" />
                <SelectItem label="Russian" value="Russian" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Select
            size={"md"}
            variant={"rounded"}
            isInvalid={false}
            isDisabled={false}
            style={styles.dropDown}
          >
            <SelectTrigger size={size} variant={variant}>
              <SelectInput placeholder="Child Stage" />
              <SelectIcon
                mr={variant === "underlined" ? 0 : "$3"}
                ml={variant === "underlined" ? "$3" : 0}
                as={ChevronDownIcon}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem
                  label="Newborn (<2 months)"
                  value="Newborn (<2 months)"
                />
                <SelectItem
                  label="Infant (<24 months)"
                  value="Infant (<24 months)"
                />
                <SelectItem
                  label="Toddler (<4 years)"
                  value="Toddler (<4 years)"
                />
                <SelectItem
                  label="Young Child (5-12 years)"
                  value="Young Child (5-10 years)"
                />
                <SelectItem
                  label="Adolescent (13-17 years)"
                  value="Adolescent (13-17 years)"
                />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        {/* <TouchableOpacity onPress={() => navigation.navigate("EventDetails")} style={styles.box}>   */}
        <View style={styles.box}>
          <View>
            <Image
              source={require("../../assets/Profiles/zeinab.jpg")}
              style={styles.eventsImage}
            />
          </View>
          <View style={styles.halfBox}>
            <View style={styles.eventHeader}>
              <Text style={styles.name}>Zeinab Ahmed</Text>
            </View>
            <View>
              <Text style={styles.location}>Redwood City, CA</Text>
              <Text style={styles.miles}>1.1 mi</Text>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View>
            <Image
              source={require("../../assets/Profiles/kofi.jpg")}
              style={styles.eventsImage}
            />
          </View>
          <View style={styles.halfBox}>
            <View style={styles.eventHeader}>
              <Text style={styles.name}>Kofi Mensah</Text>
            </View>
            <View>
              <Text style={styles.location}>Pasadena, CA</Text>
              <Text style={styles.miles}>15 mi</Text>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View>
            <Image
              source={require("../../assets/Profiles/ruth.jpg")}
              style={styles.eventsImage}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("profileDetail")}
            style={styles.box}
          >
            <View style={styles.halfBox}>
              <View style={styles.eventHeader}>
                <Text style={styles.name}>Ruth Ella Johnson</Text>
              </View>
              <View>
                <Text style={styles.location}>San Francisco, CA</Text>
                <Text style={styles.miles}>20 mi</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <View>
            <Image
              source={require("../../assets/Profiles/raffy.jpg")}
              style={styles.eventsImage}
            />
          </View>
          <View style={styles.halfBox}>
            <View style={styles.eventHeader}>
              <Text style={styles.name}>Raffy Antoni</Text>
            </View>
            <View>
              <Text style={styles.location}>Mountain View, CA</Text>
              <Text style={styles.miles}>21 mi</Text>
            </View>
          </View>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  location: {},
  eventHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  halfBox: {
    width: "75%",
  },

  eventsImage: {
    height: "90%",
    aspectRatio: 1,
    width: "15%",
    borderRadius: 50,
    // borderWidth: "2%",
    // borderColor: "pink",
  },

  eventTitle: {
    fontSize: windowHeight * 0.022,
    fontFamily: "Inter-Bold",
    fontWeight: "bold",
    color: GREEN,
  },

  name: {
    fontSize: windowHeight * 0.023,
    fontFamily: "Inter-Medium",
    color: FUSCHIA,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

  searchBar: {
    width: "90%",
    height: "5%",
    margin: 10,
  },

  buttonsBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },

  description: {
    paddingTop: 5,
  },

  dropDown: {
    width: "30%",
    alignSelf: "left",
    backgroundColor: FIGMA_WHITE,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },

  searchInput: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "white",
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },

  box: {
    borderWidth: "2%",
    borderRadius: "10%",
    borderColor: "transparent",
    width: "90%",
    height: "15%",
    margin: 10,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: FIGMA_WHITE,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Connect;
