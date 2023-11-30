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
//import { Link, Stack } from "expo-router";

//import supabase from "./env";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
//import { Icons, Themes } from "../../assets/Themes";

const Body = () => {
  const [liked, isLiked] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.box}>
        <View style={styles.halfBox}>
          <Text>Moms Who Walk!</Text>
          <Text>TayTay23</Text>
          <Text style={styles.description}>
            {" "}
            Join us for a day of strolling, where we celebrate motherhood one
            step at a time! 👟🌼{""}
          </Text>
        </View>
        <View>
          <Image source={Icons.sun} style={styles.eventsImage} />
        </View>
      </View>

      <View style={styles.boxTwo}>
        <View style={styles.halfBox2}>
          <Text>Monthly Coffee & Chat</Text>
          <Text>rose_redxx</Text>
          <Text style={styles.description}>
            You’re not alone. Bi-weekly grief and counseling workshop hosted by
            mom/therapist Katy
          </Text>
        </View>
        <View>
          <Image source={Icons.sun} style={styles.eventsImage2} />
        </View>
      </View>

      <View style={styles.boxTwo}>
        <View style={styles.halfBox2}>
          <Text>Monthly Coffee & Chat</Text>
          <Text>rose_redxx</Text>
          <Text style={styles.description}>
            Parenting is a journey best shared! Come by for coffee at the Old
            Brew House!
          </Text>
        </View>
        <View>
          <Image source={Icons.sun} style={styles.eventsImage2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    //width: windowWidth * 0.4,
    flex: 5,
    width: "100%",
    //height: "100%",

    justifyContent: "space-evenly",
    alignItems: "center",
    //paddingTop: windowHeight * 0.1,
    //width: "70%",
    borderWidth: "2%",
    borderColor: "blue",
  },

  eventsImage: {
    height: "100%",
    aspectRatio: 1,
    width: "15%",
    // borderWidth: "2%",
    // borderColor: "pink",
  },

  eventsImage2: {
    height: "100%",
    aspectRatio: 1,
    width: "15%",
    // borderWidth: "2%",
    // borderColor: "pink",
  },

  box: {
    borderWidth: "2%",
    borderColor: "pink",
    width: "90%",
    height: "25%",
    margin: 2,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
  },

  boxTwo: {
    //paddingTop: 50,
    width: "90%",
    height: "25%",
    margin: 2,
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
  },

  halfBox: {
    width: "70%",
  },

  halfBox2: {
    width: "70%",
  },

  description: {
    paddingTop: 5,
  },

  // image: {
  //   maxWidth: windowWidth * 0.8,
  //   alignItems: "center",
  //   aspectRatio: 1,
  //   //flexWrap: "wrap",
  //   flex: 1,
  // // },
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
