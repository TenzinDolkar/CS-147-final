import React from 'react';
import { GluestackUIProvider, Input, InputField, InputSlot, InputIcon, SearchIcon, Button, ButtonText, ButtonIcon, EditIcon } from '@gluestack-ui/themed';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectItem, size, variant, SelectIcon, ChevronDownIcon, SelectDragIndicatorWrapper, SelectDragIndicator } from '@gluestack-ui/themed';
// import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View, StyleSheet, Text, ImageBackground, Image, Pressable, Dimensions, TouchableOpacity } from "react-native";
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
//import { Icons, Themes } from "../../assets/Themes";

const Body = ({navigation}) => {
  const [value, setValue] = React.useState('');
  let selectIconSize = '';
  {/*const [liked, isLiked] = useState(false);   */}
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


      <TouchableOpacity onPress={() => navigation.navigate("EventDetails")} style={styles.box}>
      {/* <View style={styles.box}> */}
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventTitle}>Moms Who Walk!</Text>
            <Text style={styles.eventPoster}>TayTay23</Text>
          </View>
          <Text style={styles.description}>
            Join us for a day of strolling, where we celebrate motherhood one
            step at a time! 👟🌼{""}
          </Text>
        </View>
        <View>
        <Image source={require('../../assets/Events/walks.png')} style={styles.eventsImage} />
        </View>
      {/* </View> */}
      </TouchableOpacity>

      <View style={styles.box}>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventTitle}>Katy’s Grief Workshop</Text>
            <Text style={styles.eventPoster}>rose_redxx</Text>
          </View>
          <Text style={styles.description}>
            You’re not alone. Bi-weekly grief and counseling workshop hosted by
            mom/therapist Katy
          </Text>
        </View>
        <View>
        <Image source={require('../../assets/Events/grief.png')} style={styles.eventsImage} />
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.halfBox}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventTitle}>Monthly Coffee & Chat</Text>
            <Text style={styles.eventPoster}>katieKat_02</Text>
          </View>
          <Text style={styles.description}>
          Parenting is a journey best shared! Come by for coffee at the Old Brew House!
          </Text>
        </View>
        <View>
          <Image source={require('../../assets/Events/coffee.png')} style={styles.eventsImage} />
        </View>
      </View>
    </View>
  </GluestackUIProvider>;
};

const styles = StyleSheet.create({
  main: {
    //width: windowWidth * 0.4,
    flex: 5,
    width: "100%",
    //height: "100%",
    fontFamily: "Inter",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white"
  },
  eventsImage: {
    height: "100%",
    aspectRatio: 1,
    width: "15%"
    // borderWidth: "2%",
    // borderColor: "pink",
  },

  box: {
    borderWidth: "2%",
    borderRadius: "10%",
    borderColor: "transparent",
    width: "90%",
    height: "25%",
    margin: 2,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: FIGMA_WHITE,
    paddingTop: 10,
    paddingBottom: 10
  },
  halfBox: {
    width: "55%"
  },
  description: {
    paddingTop: 5
  },
  eventHeader: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  eventTitle: {
    fontSize: windowHeight * 0.022,
    fontFamily: "Inter-Bold",
    fontWeight: "bold",
    color: GREEN
  },
  eventPoster: {
    fontSize: windowHeight * 0.02,
    fontFamily: "Inter-Medium",
    color: FUSCHIA
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





  // image: {
  //   maxWidth: windowWidth * 0.8,
  //   alignItems: "center",
  //   aspectRatio: 1,
  //   //flexWrap: "wrap",
  //   flex: 1,
  // // },

  // imageStyle: {
  //   borderRadius: 8,
  //   //height: "100%",
  //   width: "100%",
  // },

  // name: {
  //   flexDirection: "row",
  //   justifyContent: "start",
  //   left: windowWidth * 0.001,
  // },

  captionHeart: {
    flexDirection: "row",
    //width: windowWidth,
    //height: windowHeight * 0.1, // Alternatively, use the `flex` style
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  icon2: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 1 //it fills the entier space of the container
  },

  overall: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%"
  },
  text: {
    left: windowWidth * 0.01,
    alignContent: "left",
    color: "white",
    //fontSize: 32,
    fontFamily: "Sydney",
    fontSize: windowHeight * 0.035
  },
  container: {
    backgroundColor: "white",
    justifyContent: "space-around",
    width: "80%",
    //height: "20%",
    borderRadius: 12,
    // shadow: 5,
    shadowColor: "gray",
    //shadowOffsetWidth: 4,

    margin: 25
    //alignItems: "center",
    //aspectRatio: 1,
  },

  description: {
    flexDirection: "column",
    justifyContent: "flex-start",
    left: 5,
    top: 10

    //height: "100%",
    //alignItems: "flex-end",
  },

  playSound: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    //maxWidth: windowWidth * 0.8,
    margin: 20,
    paddingTop: 5,
    alignItems: "center"
  },
  player: {
    aspectRatio: 1,
    width: "15%"
    //paddingRight: 5,
  },

  wave: {
    width: "85%",
    aspectRatio: 4,
    paddingLeft: 10
  },
  heart: {
    backgroundColor: "white",
    borderRadius: 50,
    //borderWidth: "10%",
    //borderColor: "white",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    /*flex: 1,*/
    //width: "20%",  contianer size for the bottom line, height 100%
    //height: "100%",

    padding: 10,
    right: 10,
    bottom: 10
    //position: "absolute",
    //flexDirection: "row",
    //justifyContent: "space-evenly",
  },

  button: {
    color: "white",
    borderRadius: 8
  }
});

/*
  
  <ImageBackground
        source={Profiles.landay.image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overall}>
          <View style={styles.name}>
            <Text style={styles.text}>{Profiles.landay.name}</Text>
          </View>
          <View style={styles.captionHeart}>
            <Text style={styles.text2}>{Profiles.landay.caption}</Text>
            <View style={styles.heart}>
              <Pressable style={styles.button} onPress={() => isLiked(!liked)}>
                <Image
                  source={liked ? Icons.likeOn.light : Icons.likeOff.light}
                  style={styles.icon}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>


  return(
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.text3}>My hottest take</Text>
        </View>
        <View style={styles.playSound}>
          <Image source={Icons.player.light} style={styles.player} />
          <View style={styles.wave}>
            <Image source={Icons.audioWave.light} style={styles.icon2} />
          </View>
        </View>
      </View>
    </View>
  );
};


*/

export default Body;

/*
const renderComment = ({ item }) => {
  return (
    <Comment
      id={item.id}
      eventName={item.eventName}
      userName={item.userName}
      description={item.description}
      image={item.image}
    />
  );
};

const Body = () => {
  const [liked, isLiked] = useState(false);

  useEffect(() => {
    // Fetch data on initial load
    const fetchData = async () => {
      const response = await supabase.from("Kith&Kin").select("*");
      //print data
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderComment}
        keyExtractor={(item) => item.text}
        style={styles.posts}
      />

      <View style={styles.main}>
        <View style={styles.box}>
          <View>
            <Text>{eventName}</Text>
            <Text>{userName}</Text>
            <Text> {description}</Text>
          </View>
          <View>
            <Image source={Icons.sun} style={styles.eventsImage} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
*/