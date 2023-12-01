// import React from "react";
// import { GluestackUIProvider, Image } from "@gluestack-ui/themed";
// import {
//   View,
//   StyleSheet,
//   Text,
//   ImageBackground,
//   //Image,
//   Pressable,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import {
//   Select,
//   SelectTrigger,
//   SelectInput,
//   SelectPortal,
//   SelectBackdrop,
//   SelectContent,
//   SelectItem,
//   size,
//   variant,
//   SelectIcon,
//   ChevronDownIcon,
//   SelectDragIndicatorWrapper,
//   SelectDragIndicator,
// } from "@gluestack-ui/themed";
// // import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
// import { config } from "@gluestack-ui/config";
// import Profiles from "../../assets/Profiles";
// import Icons from "../../assets/Icons";
// import { useState } from "react";

// const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
// const FIGMA_WHITE = "#F8F7F7";
// const PINK = "#FBC6D0";
// const GREEN = "#387F58";
// const FUSCHIA = "#E45B74";

// const RSVP = () => {
//   return (
//     <GluestackUIProvider config={config}>
//       <View style={styles.main}>
//         <View style={styles.eventSummaryFrame}>
//           <Image
//             size="md"
//             borderRadius="$none"
//             source={{
//               uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//             }}
//             style={styles.eventImage}
//           />
//           <View style={styles.eventSummary}>
//             <Text style={styles.eventTitle}>Title</Text>
//             <Text style={styles.eventBody}>Date</Text>
//             <Text style={styles.eventBody}>Location</Text>
//           </View>
//         </View>
//         <View style={styles.eventDescription}>
//           <Text style={styles.eventTitle}>Description</Text>
//           <Text style={styles.eventBody}>Lorem ipsum upset etc</Text>
//           {/* <TouchableOpacity
//             onPress={() => navigation.navigate("EventDetails")}
//             style={styles.box}
//           > */}
//           <Text style={styles.eventBody}>RSVP</Text>
//           {/* </TouchableOpacity> */}
//         </View>
//       </View>
//     </GluestackUIProvider>
//   );
// };
// export default RSVP;
