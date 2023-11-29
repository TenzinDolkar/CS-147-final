import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { useState } from "react";
//import supabase from "./env";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
//import { Icons, Themes } from "../../assets/Themes";

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

const styles = StyleSheet.create({
  main: {
    //width: windowWidth * 0.4,
    flex: 3,
    width: "100%",
    //height: "100%",

    justifyContent: "space-between",
    alignItems: "center",
    //paddingTop: windowHeight * 0.1,
    //width: "70%",
  },

  eventsImage: {
    height: "40%",
    aspectRatio: 1,
    width: "15%",
    borderWidth: "2%",
    borderColor: "pink",
  },

  box: {
    width: "80%",
    margin: 2,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  image: {
    maxWidth: windowWidth * 0.8,
    alignItems: "center",
    aspectRatio: 1,
    //flexWrap: "wrap",
    flex: 1,
  },

  imageStyle: {
    borderRadius: 8,
    //height: "100%",
    width: "100%",
  },

  name: {
    flexDirection: "row",
    justifyContent: "start",
    left: windowWidth * 0.001,
  },

  captionHeart: {
    flexDirection: "row",
    //width: windowWidth,
    //height: windowHeight * 0.1, // Alternatively, use the `flex` style
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  icon2: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 1, //it fills the entier space of the container
  },

  overall: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  text: {
    left: windowWidth * 0.01,
    color: "white",
    //fontSize: 32,
    fontFamily: "Sydney",
    fontSize: windowHeight * 0.035,
  },

  text2: {
    //fontSize: 18,
    left: windowWidth * 0.01,
    color: "white",
    fontFamily: "Sydney",
    fontSize: windowHeight * 0.02,
  },

  text3: {
    fontFamily: "Sydney",
    fontSize: windowHeight * 0.027,
    left: windowWidth * 0.01,
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

    margin: 25,
    //alignItems: "center",
    //aspectRatio: 1,
  },

  description: {
    flexDirection: "column",
    justifyContent: "start",
    left: 5,
    top: 10,

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
    alignItems: "center",
  },

  player: {
    aspectRatio: 1,
    width: "15%",
    //paddingRight: 5,
  },

  wave: {
    width: "85%",
    aspectRatio: 4,
    paddingLeft: 10,
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
    bottom: 10,
    //position: "absolute",
    //flexDirection: "row",
    //justifyContent: "space-evenly",
  },
  button: {
    color: "white",
    borderRadius: 8,
  },
});

{
  /*<ImageBackground
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
}
