import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useState } from "react";

import { Link } from "expo-router";

import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  GluestackUIProvider,
  Icon,
  User,
  Button,
  ButtonText,
  ButtonIcon,
} from "@gluestack-ui/themed";

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Heading,
  CloseIcon,
  ButtonGroup,
} from "@gluestack-ui/themed";

import Icons from "../../assets/Icons";

import { config } from "@gluestack-ui/config";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

export default function Profile({ navigation }) {
  const [showConstruction, setShowConstruction] = useState(false);
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Avatar bgColor="$rose200" size="2xl" style={styles.profilePic}>
            <Image source={require("../../assets/Icons/Profile_Icon.png")} />
          </Avatar>

          <Text style={styles.title}>Profile</Text>
          <View style={styles.profileContainer}>
            <Text style={styles.text}>
              This is your place to share a little about yourself! Feel free to
              write about who you are, your hobbies, your kids, or anything!
            </Text>
            <Text style={styles.text}>
              Tell us about yourself to make it easier to discover your kith and
              kin.
            </Text>
          </View>
          <View style={styles.buttonBar}>
            <Button
              action="secondary"
              size="md"
              borderRadius="$none"
              isDisabled={false}
              onPress={() => setShowConstruction(true)}
              style={styles.button}
            >
              <ButtonText color={GREEN}>Edit</ButtonText>
            </Button>
            <Button
              action="secondary"
              size="md"
              borderRadius="$none"
              isDisabled={false}
              onPress={() => setShowConstruction(true)}
              style={styles.button}
            >
              <ButtonText color={GREEN}>Settings</ButtonText>
            </Button>
            <Button
              action="secondary"
              size="md"
              borderRadius="$none"
              isDisabled={false}
              onPress={() => setShowConstruction(true)}
              style={styles.button}
            >
              <ButtonText color={GREEN}>. . .</ButtonText>
            </Button>
          </View>
          <Button
            action="secondary"
            size="md"
            borderRadius="$none"
            isDisabled={false}
            onPress={() => navigation.navigate("Calendar")}
            style={styles.button}
            id="calendarButton"
          >
            <ButtonText color={GREEN}>See my calendar</ButtonText>
          </Button>
        </View>

        <AlertDialog
          isOpen={showConstruction}
          onClose={() => {
            setShowConstruction(false);
          }}
        >
          <AlertDialogBackdrop />
          <AlertDialogContent>
            <AlertDialogHeader>
              <Heading size="lg">Under Construction</Heading>
              <AlertDialogCloseButton>
                <Icon as={CloseIcon} />
              </AlertDialogCloseButton>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text size="sm">This page is still under construction.</Text>
            </AlertDialogBody>
            <AlertDialogFooter></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
    alignItems: "center",
  },
  profilePic: {
    padding: 10,
    margin: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: FUSCHIA,
    fontFamily: "Inter-Medium",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  text: {
    margin: 10,
  },
  profileContainer: {
    width: "100%",
    justifyContent: "center",
    padding: 10,
    backgroundColor: FIGMA_WHITE,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: FIGMA_WHITE,
    margin: 10,
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    marginTop: 20,
  },
});
