
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Text, Dimensions} from "react-native";
import {RectButton} from "react-native-gesture-handler";
const { width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width:245,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: 15,
        fontFamily: "SFProText-Regular",
        justifyContent: "center"

    },
    titleContainer: {
        height: 100,
        textAlign: "center",
    }
})
interface ButtonProps {
    variant: "default" | "primary";
    label: string,
    onPress: () => void;
}
const Button = ({label, variant, onPress}: ButtonProps) => {
    const backgroundColor = variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
    const color = variant === "primary" ? "white": "#0C0D34";
    return (
        <RectButton style={[styles.container, { backgroundColor}]} {...{onPress}}>
            <Text style={[styles.label, { color}]}>{label}</Text>
        </RectButton>
    );
}
Button.defaultProps = { variant: "default"};
export default Button;
