import * as React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from "react-native";
const { width, height} = Dimensions.get("window");
export const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
    container: {
        width,
        overflow: "hidden"
    },
    title: {
        fontSize: 70,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center",
        lineHeight: 70
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end"
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderBottomRightRadius: BORDER_RADIUS
    }
})
interface WelcomeProps {
    label: string;
    right?: boolean,
    picture: number
}
const Welcome = ({label, right, picture}: WelcomeProps) => {
    return (
        <View >
        </View>
    );
}
export default Welcome;
