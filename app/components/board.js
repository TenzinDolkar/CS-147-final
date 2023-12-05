import { StyleSheet } from "react-native";

import { Link } from "expo-router";

import React from 'react';
import { GluestackUIProvider, Input, InputField, InputSlot, InputIcon, SearchIcon, Button, ButtonText, ButtonIcon, EditIcon } from '@gluestack-ui/themed';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectItem, size, variant, SelectIcon, ChevronDownIcon, SelectDragIndicatorWrapper, SelectDragIndicator } from '@gluestack-ui/themed';
// import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View, Text, ImageBackground, Image, Pressable, Dimensions, TouchableOpacity } from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { useState } from "react";
//import { Link, Stack } from "expo-router";

//import supabase from "./env";

const {
  height: windowHeight,
  width: windowWidth
} = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";




export default function Board() {
  const [value, setValue] = React.useState('');
  let selectIconSize = '';
  return <GluestackUIProvider config={config}>
  <View style={styles.main}>

    {/* <Input>
       <InputField placeholder="Search all events:" />
       </Input> */}
    <View style={styles.searchBar}>
      <Input size={"sm"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.searchInput}>
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }} value={value} placeholder="Search all events..." />
      </Input>
    </View>

    <View style={styles.buttonsBar}>
    <Select size={"md"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.dropDown}>
      <SelectTrigger size={size} variant={variant} >
        <SelectInput placeholder="Sort by:" />
        <SelectIcon mr={variant === 'underlined' ? 0 : '$3'} ml={variant === 'underlined' ? '$3' : 0} as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="Newest" value="Newest"  />
          <SelectItem label="Nearest" value="Nearest"  />
          <SelectItem label="Popular" value="Popular"  />
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
    >
      <ButtonIcon as={EditIcon} />
    </Button>
    </View>
    </View>


     {/* <TouchableOpacity onPress={() => navigation.navigate("EventDetails")} style={styles.box}>   */}
     <View style={styles.box}>
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

        <View style={styles.box}>
      <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
      </View>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.name}>Back pain issuesh</Text>
          </View>
          <View>
            <Text style={styles.location}>JungLee12</Text>
            <Text style={styles.miles}>My back is killing me! No gels seems to help.</Text>
          </View>  
        </View>
        
        </View>
        

        <View style={styles.box}>
      <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
      </View>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.name}>New neighbor</Text>
          </View>
          <View>
            <Text style={styles.location}>AlejandraGarciaa</Text>
            <Text style={styles.miles}>Any good kids playground in the neighborhood?</Text>
          </View>  
        </View>
        
        </View>


        <View style={styles.box}>
      <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
      </View>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.name}>Post-partum self care</Text>
          </View>
          <View>
            <Text style={styles.location}>TayTay23</Text>
            <Text style={styles.miles}>Where to find recipe for toddlers</Text>
          </View>  
        </View>
        
        </View>
       {/* </TouchableOpacity> */}

     


    </GluestackUIProvider>;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    padding: 24,

    
  },
  container: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  }
  ,


  box: {
    borderWidth: "2%",
    borderRadius: "10%",
    borderColor: "transparent",
    width: "90%",
    height: "15%",
    margin: 2,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: FIGMA_WHITE,
    paddingTop: 10,
    paddingBottom: 10
  },

  eventHeader: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  halfBox: {
    width: "75%",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },

  eventsImage: {
    height: "90%",
    aspectRatio: 1,
    width: "15%",
    borderRadius: 50,
    // borderWidth: "2%",
    // borderColor: "pink",
  },
  location: {
color: FUSCHIA
  },

  subtitle: {
    fontSize: 36,
    color: "#38434D",
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

  buttonsBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },


  name: {
    fontSize: windowHeight * 0.023,
    fontFamily: "Inter-Medium",
    color: GREEN
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
      width: 2
    }

    
  },





}

);
