import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

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
} from '@gluestack-ui/themed';

import Icons from "../../assets/Icons";

import { config } from "@gluestack-ui/config";

const {
  height: windowHeight,
  width: windowWidth
} = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";


export default function Profile() {
  return (
    <GluestackUIProvider config={config}>
    <View style={styles.container}>
      <View style={styles.main}>
        
      <Avatar bgColor="$rose200" size="2xl">
        {/* User is imported from 'lucide-react-native' */}
        {/* <Icon as={Icons.profileFilled.nav} color="white" size="lg" /> */}
        <Image source={require("../../assets/Icons/Profile_Icon.png")} />
      </Avatar>
      
        <Text style={styles.title}>Profile</Text>
        <View style={styles.profileContainer}>
          <Text style={styles.text}>This is your place to share a little about yourself! Feel free to write about who you are, your hobbies, your kids, or anything!</Text>
          <Text style={styles.text}>Tell us about yourself to make it easier to discover your kith and kin.</Text>
        </View>
        <View style={styles.buttonBar}>
          <Button
            action="secondary"
            size="md"
            borderRadius="$none"
            isDisabled={false}
            onPress={() => setShowAlertDialog(true)}
            style={styles.button}
          >
            <ButtonText color={GREEN}>RSVP</ButtonText>
          </Button>
        </View>
      </View>
    </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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
});
