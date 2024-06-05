"use client";
import { createGlobalStyle } from "styled-components";
import { Karla, Noto_Sans } from "next/font/google";

const kala = Noto_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
// Define your theme with various shades of gray for backgrounds
export const theme = {
  colors: {
    primary: "#06B6D4",
    backgroundLight: "#f0f0f0", // Very light gray
    backgroundMedium: "#d9d9d9", // Light gray
    backgroundDark: "#a6a6a6", // Medium gray
    backgroundDarker: "#808080", // Dark gray
    backgroundDarkest: "#4d4d4d", // Very dark gray
  },
};

export const GlobalStyles = createGlobalStyle`
body{
    font-family:${kala.style.fontFamily} ;
    margin:0;
    font-weight: 400 ;
    box-sizing:border-box;
}
.p-component{
    font-family:${kala.style.fontFamily} ;
    font-weight: 400 ;
}
`;
