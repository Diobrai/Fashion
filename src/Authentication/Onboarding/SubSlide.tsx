
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet} from "react-native";
import {Button, Text} from '../../Components';
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subLabel: {
        marginBottom: 12,
        marginTop: 40,
        textAlign: "center"
    },
    description: {
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
            <Text variant="title2" style={styles.subLabel}>{subLabel}</Text>
            <Text variant="body1" style={styles.description}>{description}</Text>
            <Button
                label={last ? "Let's started" : "Next" }
                variant={last ? "primary": "default"}
                {...{ onPress}}
            />
        </View>
    );
}
export default SubSlide;
