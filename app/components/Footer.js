import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import { Icons, Themes } from "../../assets/Themes";

// advanced JS syntax: destructure and rename variables
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
const FIGMA_WHITE = "#F8F7F7";
const PINK = "#FBC6D0";
const GREEN = "#387F58";

const Footer = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.iconContainer}>
        <Image source={Icons.discover.light} style={styles.icon} />
        <Text style={styles.text}>Discover</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={Icons.heart.light} style={styles.icon} />
        <Text style={styles.text}>Matches</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={Icons.messages.light} style={styles.icon} />
        <Text style={styles.text}>DMs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    widthColor: "blue",
    width: 5,
    flexDirection: "row",
    // backgroundColor: Themes.light.navigation,
    backgroundColor: "white",
    width: windowWidth,
    height: windowHeight * 0.1, // Alternatively, use the `flex` style
    justifyContent: "space-around",
  },
  icon: {
    width: "40%", // windowWidth * 0.02,
    height: "40%", //windowHeight * 0.02,
    resizeMode: "contain",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});

export default Footer;
