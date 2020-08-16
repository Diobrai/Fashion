import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Text, Dimensions} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import {backgroundColor, color, useTheme} from "@shopify/restyle";
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
    const theme = useTheme();
    const backgroundColor = variant === "primary" ? theme.colors.primary : theme.colors.gray;
    const color = variant === "primary" ? theme.colors.white: theme.colors.title;
    return (
        <RectButton style={[styles.container, { backgroundColor}]} {...{onPress}}>
            <Text style={[styles.label, { color}]}>{label}</Text>
        </RectButton>
    );
}
Button.defaultProps = { variant: "default"};
export default Button;
