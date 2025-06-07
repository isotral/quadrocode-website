// src/app/style/theme.ts
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            first: { 100: string; 200: string };
            second: { 100: string; 200: string; 300: string };
            fifth: { white: string; 100: string };
            sixth: { black: string; 100: string; 200: string };
            seventh: { 100: string };
        };
    }

    interface PaletteOptions {
        custom?: {
            first: { 100: string; 200: string };
            second: { 100: string; 200: string; 300: string };
            fifth: { white: string; 100: string };
            sixth: { black: string; 100: string; 200: string };
            seventh: { 100: string };
        };
    }
}

const theme = createTheme({
    typography: {
        h3: {
            fontWeight: 700,
            fontSize: '32px',
            color: '#393939',
        },
        h4: {
            fontWeight: 400,
            fontSize: '23px',
            color: '#696969',
            lineHeight: '1.5',
        },

        // You can define other variants here if needed
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,   // 40rem
            md: 768,   // 48rem
            lg: 1024,  // 64rem
            xl: 1280,  // 80rem
        },
    },
    palette: {
        primary: { main: "#F37021" },
        secondary: { main: "#1E293B" },
        custom: {
            first: {
                100: "#E92C33",
                200: "#2563EB",
            },
            second: {
                100: "#1E293B",
                200: "#111827",
                300: "#404346",
            },
            fifth: {
                white: "#FFFFFF",
                100: "#F1F3F5",
            },
            sixth: {
                black: "#000000",
                100: "#393939",
                200: "#333333",
            },
            seventh: {
                100: "#ef4a23",
            },
        },
    },
});

export default theme;
