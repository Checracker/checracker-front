import "@emotion/react";
import { Theme } from "@emotion/react";

export interface BoardColorType {
  primary: string;
  secondary: string;
  title: string;
  line: string;
  bgColor: string;
}

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      alert: string;
      success: string;
      define: string;
      white: string;
      black: string;
    };
    board: BoardColorType[];
    grayScale: {
      primary: string;
      deepGray: string;
      bgColor: string;
      line: string;
      text: string;
    };
    fontSize: {
      title: number;
      medium16: number;
      medium14: number;
      caption: number;
    };
    lineHeight: {
      default: number;
      small: number;
    };
    fontWeight: {
      bold: number;
    };
  }
}
export const theme: Theme = {
  colors: {
    primary: "#DDA5FF",
    secondary: "#A5C3FF",
    danger: "#C23F38",
    alert: "#EDAC46",
    success: "#67AD5B",
    define: "#3F8FE3",
    black: "#1D1A1A",
    white: "#FFFFFF",
  },
  board: [
    {
      primary: "#E56363",
      secondary: "#FFA1A1",
      bgColor: "#E8D9D9",
      title: "#8C1B1B",
      line: "#FF3F3F",
    },
    {
      primary: "#B352D6",
      secondary: "#E6BCFF",
      bgColor: "#E5D9E7",
      title: "#8B28AD",
      line: "#CD3FFF",
    },
    {
      primary: "#EB8F3B",
      secondary: "#FFD0A5",
      bgColor: "#E8DED9",
      title: "#C56825",
      line: "#FF9B3F",
    },
    {
      primary: "#848484",
      secondary: "#D0D0D0",
      bgColor: "#E8E7E7",
      title: "#505050",
      line: "#848484",
    },
  ],
  grayScale: {
    primary: "#B7B7B7",
    deepGray: "#818181",
    bgColor: "#F2F2F2",
    line: "#E4E4E4",
    text: "#B4AEAE",
  },
  fontSize: {
    title: 24,
    medium16: 16,
    medium14: 14,
    caption: 13,
  },
  lineHeight: {
    default: 150,
    small: 20,
  },
  fontWeight: {
    bold: 600,
  },
};
