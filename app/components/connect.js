import { StyleSheet } from "react-native";
import React from 'react';

import { View, Text, ImageBackground, Pressable, Dimensions, TouchableOpacity } from "react-native";

import {
  GluestackUIProvider,
  Image,
  Button,
  ButtonText,
  ButtonIcon,
  set,
} from "@gluestack-ui/themed";

import { Input, InputField, InputSlot, InputIcon, SearchIcon } from '@gluestack-ui/themed';

const {
  height: windowHeight,
  width: windowWidth
} = Dimensions.get("window");
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

export default function Connect() {
  const [value, setValue] = React.useState('');

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>

      <View style={styles.searchBar}>
        <Input size={"sm"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.searchInput}>
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }} value={value} placeholder="Search all profile..." />
        </Input>
      </View>

      <View style={styles.buttonsBar}>
    
      <Select size={"md"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.dropDown}>
        <SelectTrigger size={size} variant={variant} >
          <SelectInput placeholder="Radius" />
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


      <Select size={"md"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.dropDown}>
        <SelectTrigger size={size} variant={variant} >
          <SelectInput placeholder="Age" />
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


      <Select size={"md"} variant={"rounded"} isInvalid={false} isDisabled={false} style={styles.dropDown}>
        <SelectTrigger size={size} variant={variant} >
          <SelectInput placeholder="Child Stage" />
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
      </View>

     {/* <TouchableOpacity onPress={() => navigation.navigate("EventDetails")} style={styles.box}>   */}
     <View style={styles.box}>
      <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
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
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
      </View>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.name}>Kofi Mensah</Text>
          </View>
          <View>
            <Text style={styles.location}>Redwood City, CA</Text>
            <Text style={styles.miles}>1.1 mi</Text>
          </View>  
        </View>
        
        </View>
        

        <View style={styles.box}>
      <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
      </View>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.name}>Ruth Ella Johnson</Text>
          </View>
          <View>
            <Text style={styles.location}>Redwood City, CA</Text>
            <Text style={styles.miles}>1.1 mi</Text>
          </View>  
        </View>
        
        </View>


        <View style={styles.box}>
      <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
      </View>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.name}>Raffy Antoni</Text>
          </View>
          <View>
            <Text style={styles.location}>Redwood City, CA</Text>
            <Text style={styles.miles}>1.1 mi</Text>
          </View>  
        </View>
        
        </View>
       {/* </TouchableOpacity> */}

     
    
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
  location: {

  },
  eventHeader: {
    flexDirection: "column",
    justifyContent: "space-between"
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
    color: GREEN
  },

  name: {
    fontSize: windowHeight * 0.023,
    fontFamily: "Inter-Medium",
    color: FUSCHIA
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
    height: "5%"
  },

  buttonsBar: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  description: {
    paddingTop: 5
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

  searchInput: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "white",
    backgroundColor: "lightgrey",
    borderRadius: 10
  },

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

});
