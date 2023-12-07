import React from "react";
import { GluestackUIProvider, Image } from "@gluestack-ui/themed";
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
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [hasRSVPed, setHasRSVPed] = React.useState(false);
  const [text, setText] = useState("");

  const onMessageSend = async () => {
    const response = await supabase.from("Events").insert({
      title: text,
      userName: text,
      description: text,
      tag: text,
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
      <View style={styles.overall}>
        <View>
          <Text>Title</Text>
          <TextInput
            value={text}
            onChangeText={(text) => {
              setText(text);
            }}
            style={styles.titleInput}
          />
        </View>

        <View>
          <Text>Tags</Text>
          <TextInput style={styles.titleInput} />
        </View>
      </View>

      <View style={styles.text}>
        <Text>Body</Text>
        <TextInput style={styles.titleInput} />
        <Text>You currently have no events on your calendar. </Text>
        <Text>Try searching the Events page and RSVPing to one!</Text>
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
        onPress={() => {
          setShowAlertDialog(false);
          setShowSuccess(true);
          setHasRSVPed(true);
          onMessageSend();
          navigation.navigate("Board");
        }}
      >
        <ButtonText>Post</ButtonText>
      </Button>
    </GluestackUIProvider>
  );
};
export default Post;
//export default () => <HStack />;

const styles = StyleSheet.create({
  month: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },

  overall: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  row1: {
    paddingTop: 20,
  },

  row2: {
    paddingTop: 20,
  },

  row3: {
    paddingTop: 20,
  },

  row4: {
    paddingTop: 20,
  },

  text: {
    paddingTop: 30,
    paddingLeft: 20,
  },
  titleInput: {
    width: 300,
    height: 30,
    backgroundColor: "gray",
  },
});
