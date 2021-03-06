
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Dimensions, Image} from "react-native";
import {Text} from "../../Components";
const { width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
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
interface SlideProps {
    label: string;
    right?: boolean,
    picture: number
}
const Slide = ({label, right, picture}: SlideProps) => {
    const transform= [{ translateY: (SLIDE_HEIGHT - 100) / 2 },
        {translateX: right ? (width/2 - 50): (-width /2 + 50)},
        {
            rotate: right ? "-90deg": "90deg"
        }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture} />
            </View>
            <View style={[styles.titleContainer, {transform}]}>
                <Text variant="title1">{label}</Text>
            </View>
        </View>
    );
}
export default Slide;
