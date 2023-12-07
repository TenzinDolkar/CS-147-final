import React from 'react';

import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Dimensions, TouchableOpacity, FlatList  } from "react-native";

import { GluestackUIProvider, Input, InputField, InputSlot, InputIcon, SearchIcon, Button, ButtonText, ButtonIcon, EditIcon, ArrowRightIcon, set } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import { useState } from "react";


import { Link } from "expo-router";

const {
  height: windowHeight,
  width: windowWidth
} = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

export default function Chat({ navigation}) {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>

      <View style={styles.searchBar}>
        <Input size={"sm"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.searchInput}>
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }} value={value} placeholder="Search messages..." />
        </Input>
      </View>


      <View style={styles.main}>
        <Text style={styles.subtitle}>You have no messages.</Text>
        <Text style={styles.text}>Try sending a message to another member to get started! Your chat history will appear here.</Text>
        {/* <Text style={styles.title}>Chat</Text> */}
      </View>
    </View>
  );
}

let messages = [
  { message: "Hello", sender: "me" },
];

export function ChatHistory({ navigation}) {
  [messages, setMessages] = useState(messages);
  [value, setValue] = useState("");
  return (
    <View style={styles.container}>

      {/* <View style={styles.titleBar}>
        <Text style={styles.title}>USERNAME</Text>
      </View> */}
      <View style={styles.main}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
      >
      </FlatList>

      <View style={styles.messageBar}>
        <Button
          action="primary"
          style={styles.button}
        >
          <Image source={require("../../assets/Icons/camera.png")} />
        </Button>



        <Input size={"sm"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.messageInput} >
          <InputSlot pl="$3">
          </InputSlot>
          <InputField onChange={(e) => {
            setValue(e.nativeEvent.text);
          }} value={value} placeholder="Write message" />
        </Input>
      <Button
                action="primary"
                style={styles.button}
                onPress={() => {
                  setMessages([...messages, { message: value, sender: "me" }]);
                }}
              >
                <Image source={require("../../assets/Icons/send.png")} />
              </Button>
      </View>
      </View>

    </View>
  );
}

function renderMessage({ item }) {
  let isMe = item.sender === "me";
  return (
    <View style={isMe ? styles.myMessage : styles.theirMessage}>
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    borderColor: "black",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    width: "100%",
  },
  titleBar: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: PINK
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
    color: GREEN,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 24,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
  },
  searchBar: {
    width: "90%",
    height: "5%"
  },
  searchInput: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "white",
    backgroundColor: "lightgrey",
    borderRadius: 10
  },
  myMessage: {
    backgroundColor: GREEN,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: "flex-end",
    maxWidth: "75%"
  },
  theirMessage: {
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: "flex-start",
    maxWidth: "75%"
  },
  messageBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 5,
  },
  messageInput: {
    width: "80%",
    margin: 5,
    flex: 1,
  },
  button: {
    width: "20%",
    backgroundColor: "transparent",
  },
});
