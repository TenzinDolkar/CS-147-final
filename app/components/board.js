import { StyleSheet, FlatList } from "react-native";

import { Link } from "expo-router";

import React from "react";
import {
  GluestackUIProvider,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  SearchIcon,
  Button,
  ButtonText,
  ButtonIcon,
  EditIcon,
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
// import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import {
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { useState, useEffect } from "react";
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

import supabase from "./supabase.js";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

const renderComment = ({ item }) => {
  return (
    <View id={item.id} style={styles.container}>
      <View style={styles.imageBox}>
        <Image src={item.pic} style={styles.eventsImage} />
      </View>
      <View style={styles.box}>
        <View style={styles.texts}>
          <View style={styles.titleNtag}>
            <Text style={styles.title}>{item.title} </Text>
            <Text style={styles.tag}>{item.tag}</Text>
          </View>
          <Text style={styles.userName}>{item.userName} </Text>
          <Text style={styles.description}> {item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const Board = ({ navigation }) => {
  const [value, setValue] = React.useState("");

  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hasRSVPed, setHasRSVPed] = React.useState(false);

  let selectIconSize = "";

  const [liked, isLiked] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch data on initial load
    const fetchData = async () => {
      const response = await supabase.from("Events").select("*");
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleRecordInserted = (payload) => {
    console.log("INSERT", payload);
    setData((oldData) => [...oldData, payload.new]);
  };

  useEffect(() => {
    // From https://supabase.com/docs/guides/realtime/concepts#postgres-changes
    supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Events" },
        handleRecordInserted
      )
      .subscribe();
  }, [data]);

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.main}>
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
              placeholder="Search all posts..."
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
              <SelectInput placeholder="Sort by:" />
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
                <SelectItem label="Newest" value="Newest" />
                <SelectItem label="Nearest" value="Nearest" />
                <SelectItem label="Popular" value="Popular" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Button
            size="sm"
            borderRadius="10"
            variant="solid"
            action="primary"
            bg={GREEN}
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => {
              setShowAlertDialog(false);
              setShowSuccess(true);
              setHasRSVPed(true);
              navigation.navigate("Post");
            }}
          >
            <ButtonIcon as={EditIcon} />
          </Button>
        </View>

        <FlatList
          data={data}
          renderItem={renderComment}
          keyExtractor={(item) => item.text}
          style={styles.posts}
        />
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    color: "black",
    backgroundColor: "white",
  },

  userName: {
    color: FUSCHIA,
    fontSize: 12,
  },

  description: {
    fontSize: 13,
  },

  texts: {
    width: "90%",
  },
  titleNtag: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tag: {
    fontSize: 12,
    padding: 3,
    backgroundColor: "pink",
  },

  container: {
    width: "90%",
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 25,
  },

  box: {
    borderWidth: "2%",
    borderRadius: "10%",
    borderColor: "transparent",
    width: "90%",
    margin: 5,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: FIGMA_WHITE,
    paddingTop: 10,
    paddingBottom: 10,
  },

  eventHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: GREEN,
  },

  imageBox: {
    width: "20%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  eventsImage: {
    height: "90%",
    aspectRatio: 1,
    width: "15%",
    borderRadius: 50,
  },

  searchBar: {
    width: "90%",
    height: "5%",
  },

  searchInput: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "white",
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },

  buttonsBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },

  dropDown: {
    width: "40%",
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

    posts: {
      marginTop: 12,
      backgroundColor: "white",
      width: "100%",
    },
    send: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export default Board;
