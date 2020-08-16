import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Dimensions} from "react-native";
import {interpolateColor, onScrollEvent, useScrollHandler, useValue} from 'react-native-redash';
import Animated, {divide, multiply} from "react-native-reanimated";
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS} from './Slide';
import SubSlide from './SubSlide';
import Dot from "../../Components/Dot";
import {useRef} from "react";
const { width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContainer: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    }
});
const slides = [
    {
        label: "Relaxed",
        color: "#BFEAF5",
        subLabel: 'Une Vie Cool',
        description: 'Toute ma vie bla bla',
        picture: require("../../../assets/1.jpg")
    },
    {
        label: "PlayFul",
        color: "#BEECC4",
        subLabel: 'Une Vie Propre',
        description: 'Toute ma vie bla bla Toute ma vie bla bla Toute ma vie bla bla',
        picture: require('../../../assets/2.jpg')
    },
    {
        label: "Excentric",
        color: "#FFE4D9",
        subLabel: 'Une Vie Vrai',
        description: 'Toute ma vie bla bla Toute ma vie bla bla Toute ma vie bla bla Vie',
        picture: require("../../../assets/3.jpg")
    },
    {
        label: "Funky",
        color: "#FFDDDD",
        subLabel: 'Une Vie salle',
        description: 'Toute ma vie bla bla Toute ma vie bla bla Toute ma vie bla bla Vie',
        picture: require("../../../assets/4.jpg")
    },
]
const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    // TODO: scrollHandler useScrollHandler?
    const { scrollHandler, x} = useScrollHandler() ;
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, index) => index*width),
        outputRange: slides.map((slide) => slide.color)
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, {backgroundColor}]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                >
                    {slides.map(({label, picture}, index) => (
                            <Slide  key={index} right={!!(index%2)} {...{label, picture}}/>
                        )
                    )}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}}>

                </Animated.View>
                <View style={styles.footerContainer}>
                    <View style={styles.pagination}>
                        {
                            slides.map((_, index) => (
                                <Dot key={index} {...{index}} currentIndex={divide(x, width)} />
                            ))
                        }
                    </View>
                    <Animated.View
                        style={{
                            flex:1,
                            flexDirection: "row",
                            width: width* slides.length,
                            transform: [{ translateX: multiply(x, -1)}]
                        }}
                    >
                        {slides.map(({subLabel, description}, index) => (
                            <SubSlide
                                key={index}
                                onPress={() => {
                                    if(scroll.current){
                                        scroll.current.getNode().scrollTo({x: width *(index+1), animated: true})
                                    }
                                } }
                                {...{subLabel, description}}
                                last={index === slides.length-1}
                            />
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>

    );
}
export default Onboarding;
