import React from 'react';
import { GluestackUIProvider, Image } from '@gluestack-ui/themed';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectItem, size, variant, SelectIcon, ChevronDownIcon, SelectDragIndicatorWrapper, SelectDragIndicator } from '@gluestack-ui/themed';
// import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View, StyleSheet, Text, ImageBackground, Pressable, Dimensions } from "react-native";
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

const EventBody = () => {

    return (
        <GluestackUIProvider config={config}>
        <View style={styles.main}>
            <View style={styles.eventSummaryFrame}>   
                <Image
                size="md" borderRadius="$none" 
                source={{
                    uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                }}
                style={styles.eventImage}
                />
                <View style={styles.eventSummary}>
                    <Text style={styles.eventTitle}>Title</Text>
                    <Text style={styles.eventBody}>Date</Text>
                    <Text style={styles.eventBody}>Location</Text>
                </View> 
      
            </View>
            <View style={styles.eventDescription}>
                <Text style={styles.eventTitle}>Description</Text>
                <Text style={styles.eventBody}>Lorem ipsum upset etc</Text>
            </View>
        </View>
        </GluestackUIProvider>


    )
};

const styles = StyleSheet.create({
    main: {
        border: "1px solid black",
        flex: 5,
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white"
    },

    eventSummaryFrame: {
        border: "1px solid black",
        flex: 0.25,
        width: "90%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
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

    eventImage: {
        flex: 1,
        backgroundColor: "blue",
        height: "100%"
    },

    eventSummary: {
        flex: 0.8,
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 10,
    },

    eventTitle: {
        fontSize: 20,
        fontFamily: "Inter-Bold",
        color: GREEN,
    },

    eventBody: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
    },

    eventDescription: {
        border: "1px solid black",
        flex: 0.8,
        width: "90%",
        height: "25%",
        margin: 10,
        padding: 10,
        backgroundColor: FIGMA_WHITE,
        borderRadius: 10,
        shadowColor: "grey",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
          height: 2,
          width: 2
        },
        alignItems: "center",
    },




});


export default EventBody;