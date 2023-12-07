import React from "react";
import { GluestackUIProvider, Image, set } from "@gluestack-ui/themed";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  //Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
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

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { useState } from "react";
import { HStack, VStack, Box } from "@gluestack-ui/themed";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";
const FUSCHIA = "#E45B74";

//usestate that stores the text inside the textINput , when they press post, takes the state
const Post = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const onMessageSend = async () => {
    const response = await supabase.from("Events").insert({
      title: title,
      userName: "You",
      description: description,
      tag: tag,
      pic: <Image source={require("../../assets/Events/walks.png")} />,
    });
  };

  // useEffect(() => {
  //   // Fetch data on initial load
  //   const fetchData = async () => {
  //     const response = await supabase.from("Events").select("*");
  //     console.log(response);
  //     //print data
  //     setData(response.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={styles.main}>
        <Text style={styles.title}>Create a post</Text>
        <View style={styles.inputBlock}>
          <Text style={styles.text}>Title</Text>
          <TextInput
            value={title}
            placeholder="Add a title"
            onChangeText={(text) => {
              setTitle(text);
            }}
            style={styles.titleInput}
          />
        </View>

        <View style={styles.inputBlock}>
          <Text style={styles.text}>Tags</Text>
          <TextInput style={styles.titleInput}
            placeholder="Add tags" 
            onChangeText={(text) => {
              setTag(text);
            }}
            
          />
        </View>
      

      <View style={styles.inputBlock}>
        <Text style={styles.text}>Body</Text>
        <TextInput 
          placeholder="Add a description"
          onChangeText={(text) => {
            setDescription(text);
          }}
          multiline={true}
          style={{
            height: 200,
            width: 300,
            borderRadius: 10,
            backgroundColor: "lightgrey",
            padding: 5,
          }} />
      </View>
      </View>

      {/* <View>
        <TextInput
          value={text}
          //style={{ fontSize: 42, color: "steelblue" }}
          //placeholder="Type here..."
          onChangeText={(text) => {
            setText(text);
          }}
        />
      </View> */}

      <Button
        bg={GREEN}
        action="primary"
        style={styles.button}
        onPress={() => {
          onMessageSend();
          navigation.navigate("Board");
        }}
      >
        <ButtonText>Post</ButtonText>
      </Button>
      </View>
    </GluestackUIProvider>
  );
};
export default Post;
//export default () => <HStack />;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
    backgroundColor: "white",
  },
  main: {
    // maxWidth: 960,
    width: "90%",
    alignItems: "center",
    backgroundColor: FIGMA_WHITE,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "grey",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  inputBlock: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  text: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    marginBottom: 5,
  },
  titleInput: {
    width: 300,
    height: 30,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    // borderColor: "black",
    // borderWidth: 1,
    color: GREEN,
    fontFamily: "Inter-Bold",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
});
