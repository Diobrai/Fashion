
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Text} from "react-native";
import Button from '../../Components/Button';
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subLabel: {
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        lineHeight: 30,
        color: "#0C0D34",
        marginBottom: 12,
        marginTop: 40
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40
    }
})
interface SubSlideProps {
    subLabel: string;
    description?: string,
    last?: boolean,
    onPress: () => void
}
const SubSlide = ({subLabel, description, last, onPress}: SubSlideProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subLabel}>{subLabel}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
                label={last ? "Let's started" : "Next" }
                variant={last ? "primary": "default"}
                {...{ onPress}}
            />
        </View>
    );
}
export default SubSlide;
