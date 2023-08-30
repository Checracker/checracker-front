/**
 * 참고
 * - https://github.com/velopert/velog-client/blob/master/src/lib/styles/themes.ts
 */

type ThemeVariables = {
  kakaoBg: string;
  kakaoSymbol: string;
  kakaoLabel: string;
  naverBg: string;
};

export type Theme = "light" | "dark";

export const colorPalette: Record<Theme, ThemeVariables> = {
  light: {
    kakaoBg: "#FEE500",
    kakaoSymbol: "#000000",
    kakaoLabel: "#000000DE", // #000000 85%
    naverBg: "#03C75A",
  },
  dark: {
    kakaoBg: "#1e1e1e",
    kakaoSymbol: "#000000",
    kakaoLabel: "#000000DE", // #000000 85%
    naverBg: "#03C75A",
  },
};

export const themedPalette = (theme: Theme) => {
  return colorPalette[theme];
};
