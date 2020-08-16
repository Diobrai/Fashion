import {color, createText, createTheme} from '@shopify/restyle'

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#F0F2F3',
};


const theme = createTheme({
    breakpoints: {},
    colors: {
        primary: "#2CB9B0",
        white: "white",
        title: "#0C0D34",
        text: "rgba(12,13, 52, 0.7)",
        gray: "rgba(12,13, 52, 0.05)"
    },
    spacing: {},
    textVariants: {
        hero:{
            fontSize: 70,
            fontFamily: "SFProText-Bold",
            color: "white",
            textAlign: "center",
            lineHeight: 70
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProText-Semibold",
            color: 'title',
        },
        title2: {
            fontSize: 24,
            fontFamily: "SFProText-Semibold",
            color: 'title',
            lineHeight: 30
        },
        body1: {
            fontFamily: 'SFProText-Regular',
            fontSize: 16,
            lineHeight: 24,
            color: 'text',
        },
        header: {
            fontFamily: 'ShopifySans-Bold',
            fontWeight: 'bold',
            fontSize: 34,
            lineHeight: 42.5,
            color: 'black',
        },
        subheader: {
            fontFamily: 'ShopifySans-SemiBold',
            fontWeight: '600',
            fontSize: 28,
            lineHeight: 36,
            color: 'black',
        },
        body: {
            fontFamily: 'ShopifySans',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
        },

    }
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
