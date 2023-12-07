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
// import Calendar from "./assets/calendar";

//import { Link, Stack } from "expo-router";

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
        {/* <Image source={Icons.sun} style={styles.eventsImage} /> */}
        <Image src={item.pic} style={styles.eventsImage} />
        {/* </Image> <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} /> */}
      </View>
      <View style={styles.box}>
        <View style={styles.texts}>
          <View style={styles.titleNtag}>
            <Text style={styles.title}>{item.title} </Text>
            <Text style={styles.tag}>{item.tag}</Text>
            {/* <Text style={[styles.tag, {backgroundColor: tagColor}]}>{item.tag}</Text> */}
          </View>
          <Text style={styles.userName}>{item.userName} </Text>
          <Text style={styles.description}> {item.description}</Text>
          {/* <Text style={styles.pic}>  {item.pic}</Text> */}
        </View>
      </View>
    </View>

    // <Comment
    //   id={item.id}
    //   title={item.title}
    //   userName={item.userName}
    //   description={item.description}
    //   image={item.image}
    // />
  );
};

// export default function Board() {
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
      // console.log(response);
      //print data
      setData(response.data);
    };
    fetchData();
  }, []);

  // console.log()
  const handleRecordInserted = (payload) => {
    console.log("INSERT", payload);
    setData((oldData) => [...oldData, payload.new]);
  };

  useEffect(() => {
    // From https://supabase.com/docs/guides/realtime/concepts#postgres-changes
    supabase
      .channel("schema-db-changes")
      // .on(
      //   "postgres_changes",
      //   { event: "UPDATE", schema: "public", table: "posts_secure" },
      //   handleRecordUpdated
      // )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Events" },
        handleRecordInserted
      )
      // .on(
      //   "postgres_changes",
      //   { event: "DELETE", schema: "public", table: "posts_secure" },
      //   handleRecordDeleted
      // )
      .subscribe();
  }, [data]);

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.main}>
        {/* <Input>
       <InputField placeholder="Search all events:" />
       </Input> */}
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
              placeholder="Search all events..."
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

          {/* 
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
              </Button> */}

          {/* <TouchableOpacity onPress={() => navigation.navigate("EventDetails")} >  */}

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
          {/* </TouchableOpacity> */}
        </View>

        {/* <SafeAreaView style={styles.container}> */}
        <FlatList
          data={data}
          renderItem={renderComment}
          keyExtractor={(item) => item.text}
          style={styles.posts}
        />
      </View>

      {/* const handleRecordInserted = (payload) => {
    console.log("INSERT", payload);
    setData(oldData => [...oldData, payload.new]);
  } */}

      {/* useEffect(() => {
    // From https://supabase.com/docs/guides/realtime/concepts#postgres-changes
    // if (session) {
      const subscription = supabase
        .channel('schema-db-changes')
        .on('postgres_changes', {event: 'UPDATE', schema: 'public', table: 'Events'}, handleRecordUpdated)
        .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'Events'}, handleRecordInserted)
        .on('postgres_changes', {event: 'DELETE', schema: 'public', table: 'Events'}, handleRecordDeleted)
        .subscribe();

      return () => supabase.removeAllChannels();
    // }
  }, ); */}

      {/* 

      <View style={styles.main}>
        <View style={styles.box}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.userName}</Text>
            <Text> {item.description}</Text>

          </View>
          <View>
            <Image source={Icons.sun} style={styles.eventsImage} />
          </View>
        </View>
      </View> */}
      {/* </SafeAreaView> */}

      {/* //<TouchableOpacity onPress={() => navigation.navigate("EventDetails")} style={styles.box}>   */}
      {/* <View style={styles.box}>
      <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
      </View>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.name}>Recipe for baby</Text>
          </View>
          <View>
            <Text style={styles.location}>TayTay23</Text>
            <Text style={styles.miles}>Where to find recipe for the toddlers </Text>
          </View>  
        </View>
        
        </View> 
       </TouchableOpacity>  */}
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
    // borderColor: "blue",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tag: {
    fontSize: 12,
    padding: 3,
    backgroundColor: "pink",
  },

  container: {
    //height: 20,
    width: "90%",
    flex: 1,
    margin: 10,
    // justifyContent: "center",
    //maxWidth: 960,
    // marginHorizontal: "auto",
    // borderColor: "blue",
    // borderWidth: 1,
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
    // height: "55%",
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
    // paddingLeft: 10,
    //  borderColor: "blue",
    //  borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  eventsImage: {
    height: "90%",
    aspectRatio: 1,
    width: "15%",
    borderRadius: 50,
    // borderColor: "blue",
    // borderWidth: 1,

    // borderWidth: "2%",
    // borderColor: "pink",
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

    // container: {
    //   flex: 1,
    //   //alignItems: 'center',
    //   // justifyContent: 'center',
    //   flexDirection: "row",
    // justifyContent: "space-between",
    //   //backgroundColor: '#ecf0f1',
    //   //padding: 8,
    // },

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
