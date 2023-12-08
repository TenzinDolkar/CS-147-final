import React from "react";
import {
  GluestackUIProvider,
  Image,
  Button,
  ButtonText,
  ButtonIcon,
  set,
} from "@gluestack-ui/themed";
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
import { config } from "@gluestack-ui/config";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { useState } from "react";
import allEventDetails from "expo/AppEntry";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

const EventBody2 = ({ navigation }) => {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hasRSVPed, setHasRSVPed] = React.useState(false);

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.main}>
        <View style={styles.eventSummaryFrame}>
          <Image
            size="md"
            borderRadius="$none"
            source={require("../../assets/Events/grief.png")}
            style={styles.eventImage}
            alt="A mother walking on a trail with her family."
          />
          <View style={styles.eventSummary}>
            <Text style={styles.eventTitle}>Katy’s Grief Workshop</Text>
            <Text style={styles.eventBody}>Creator: tdolkar</Text>
            <Text style={styles.eventBody}>Date: 11/12/23 </Text>
            <Text style={styles.eventBody}>Location: Melow Park</Text>
          </View>
        </View>

        <View style={styles.eventDescription}>
          <Text style={styles.eventTitle}>Description</Text>
          <Text style={styles.eventBody}>
            Join us for "Katy’s Grief Workshop," a compassionate space for those
            navigating the complexities of grief and loss. Led by experienced
            facilitators, this workshop provides a supportive environment to
            share, learn, and heal. 🌸 Event Highlights: Guided Discussions:
            Engage in open conversations about grief, coping mechanisms, and the
            journey to healing. Interactive Activities: Participate in
            therapeutic activities designed to explore emotions and promote
            healing. Community Support: Connect with others who understand and
            share similar experiences in a nurturing and non-judgmental setting.
          </Text>
        </View>
        <View style={styles.buttonsBar}>
          <Button
            action="secondary"
            size="md"
            borderRadius="$none"
            isDisabled={hasRSVPed ? true : false}
            onPress={() => setShowAlertDialog(true)}
            style={styles.button}
          >
            <ButtonText color={GREEN}>RSVP</ButtonText>
          </Button>
          <Button
            action="secondary"
            size="md"
            borderRadius="$none"
            style={styles.button}
          >
            <ButtonText color={GREEN}>...</ButtonText>
          </Button>
        </View>
      </View>

      {/* CONFIRM PAGE */}
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">RSVP</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              Are you sure you want to RSVP to this event and confirm your
              attendance?
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                bg={GREEN}
                action="primary"
                onPress={() => {
                  setShowAlertDialog(false);
                  setShowSuccess(true);
                  setHasRSVPed(true);
                }}
              >
                <ButtonText>Confirm</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* SUCCESS PAGE */}
      <AlertDialog
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">You're all set!</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">RSVP confirmed! We'll see you at the event.</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="positive"
                onPress={() => {
                  setShowSuccess(false);
                  navigation.navigate("Calendar");
                }}
              >
                <ButtonText>See my calendar</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    border: "1px solid black",
    flex: 5,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },

  eventSummaryFrame: {
    border: "1px solid black",
    flex: 2,
    width: "90%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
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

  eventImage: {
    flex: 1,
    height: "100%",
  },

  eventSummary: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 10,
  },

  eventTitle: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: GREEN,
  },

  eventBody: {
    fontSize: 15,
    fontFamily: "Inter-Regular",
  },

  eventDescription: {
    border: "1px solid black",
    flex: 4,
    width: "90%",
    height: "25%",
    margin: 10,
    padding: 10,
    backgroundColor: FIGMA_WHITE,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    alignItems: "center",
  },

  buttonsBar: {
    border: "1px solid black",
    flex: 0.5,
    width: "90%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },

  button: {
    height: "80%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: FIGMA_WHITE,
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

export default EventBody2;