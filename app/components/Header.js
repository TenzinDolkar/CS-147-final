import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icons from "../../assets/Icons";
//padding/ margins on the children ORRR change layout options in parent (space-between)
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.header}>
      {/*<Image source={Icons.menu.light} style={styles.headerIcons} /> */}
      <Text style={styles.title}>Kith&Kin</Text>
      {/*<Image source={Icons.sun} style={styles.headerIcons} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    height: windowWidth * 0.15,
    width: windowWidth * 0.15,
  },
  title: {
    fontFamily: "Corben",
    fontSize: windowHeight * 0.05,
    color: "#387F58",
    //maxHeight:
    //alignItems: "center",
    //height: "100%",

    //wHeight: windowHeight * 0.9,
  },
  header: {
    //height: "10%",
    flexDirection: "row",
    justifyContent: "space-around",

    //borderWidth: 15,
    //borderColor: "blue", //#ededed
    width: "100%",
    //marginBottom: windowWidth * 0.06,
    marginTop: windowWidth * 0.12,
    flex: 0.5,
  },
});

export default Header;
//flex properties

//padding in the white box adjust the ma
