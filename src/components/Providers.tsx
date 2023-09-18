"use client";

import { store } from "@/provider/store";
import { Provider } from "react-redux";
import ThemeRegistry from "./ThemeRegistry";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/emotionTheme";

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ThemeProvider>
      </RecoilRoot>
    </Provider>
  );
}
