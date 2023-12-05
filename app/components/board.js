import { StyleSheet, FlatList} from "react-native";

import { Link } from "expo-router";

import React from 'react';
import { GluestackUIProvider, Input, InputField, InputSlot, InputIcon, SearchIcon, Button, ButtonText, ButtonIcon, EditIcon } from '@gluestack-ui/themed';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectItem, size, variant, SelectIcon, ChevronDownIcon, SelectDragIndicatorWrapper, SelectDragIndicator } from '@gluestack-ui/themed';
// import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View, Text, ImageBackground, Image, Pressable, Dimensions, TouchableOpacity } from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { useState, useEffect} from "react";
//import { Link, Stack } from "expo-router";

import supabase from "./supabase.js";

const {
  height: windowHeight,
  width: windowWidth
} = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";


const renderComment = ({ item }) => {
  return ( 
    <View id = {item.id} style={styles.container}>
       <View style={styles.imageBox}>
           <Image source={Icons.sun} style={styles.eventsImage} />
            {/* <Image source={item.pic } style={styles.eventsImage} /> */}
           {/* </Image> <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} /> */}
      </View>
        <View style={styles.box}>
          <View style={styles.texts}>
            <View style={styles.titleNtag}>
              <Text style={styles.title} >{item.title} </Text>
              <Text style={styles.tag}>{item.tag}</Text>
            </View>
            <Text style={styles.userName} >{item.userName} </Text>
            <Text style={styles.description}>  {item.description}</Text>
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

export default function Board() {
  const [value, setValue] = React.useState('');
  
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");

  let selectIconSize = '';


  const [liked, isLiked] = useState(false);

  useEffect(() => {
    // Fetch data on initial load
    const fetchData = async () => {
      const response = await supabase.from("Events").select("*");
      console.log(response);
      //print data
      setData(response.data);
    };
    fetchData();
  }, []);


const onMessageSend = async () => {
    const response = await supabase.from('posts').insert({
      user: "James Landay",
      timestamp: "now",
      text: input
    });
  }

  return (<GluestackUIProvider config={config}>
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

     <TouchableOpacity onPress={() => navigation.navigate("EventDetails")} > 
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
    </TouchableOpacity>
    </View>
    </View>


    {/* <SafeAreaView style={styles.container}> */}
      <FlatList
        data={data}
        renderItem={renderComment}
        keyExtractor={(item) => item.text}
        style={styles.posts}
      />
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
     

    </GluestackUIProvider>)
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    color: "black",
    
  
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
    fontSize:12,
    padding: 3,
    backgroundColor: "pink",
    
  },
  
  container: {
    //height: 20,
    width: "90%",
    flex: 1,
    marginLeft: 20,
    // justifyContent: "center",
    //maxWidth: 960,
    // marginHorizontal: "auto",
    // borderColor: "blue",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: FIGMA_WHITE,
    paddingLeft: 25,

  },

  box: {
    borderWidth: "2%",
    borderRadius: "10%",
    borderColor: "transparent",
     width: "80%",
    // height: "55%",
    margin: 2,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: FIGMA_WHITE,
    paddingTop: 10,
    paddingBottom: 10

  },

  eventHeader: {
    flexDirection: "column",
    justifyContent: "space-between"
  },

  title: {
    fontSize: 15,
    fontWeight: "bold", 
    color: GREEN
  },

  imageBox: {
    width: "20%",
    height: "50%",
   // paddingLeft: 10,
  },

  eventsImage: {
    height: "90%",
    aspectRatio: 1,
    width: "15%",
    borderRadius: 50,

    // borderWidth: "2%",
    // borderColor: "pink",
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
    paddingTop: 40,
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
      width: 2
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
      marginTop: 12
    }, 
    send: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
}

);
