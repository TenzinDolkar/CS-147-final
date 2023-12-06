import React from 'react';

import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Dimensions, TouchableOpacity  } from "react-native";

import { GluestackUIProvider, Input, InputField, InputSlot, InputIcon, SearchIcon, Button, ButtonText, ButtonIcon, EditIcon, value } from '@gluestack-ui/themed';
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
    width: "90%"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
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
});
