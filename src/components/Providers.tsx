"use client";

import { store } from "@/provider/store";
import { Provider } from "react-redux";
import ThemeRegistry from "./ThemeRegistry";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/emotionTheme";
import Header from "./ui/Header";

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </ThemeProvider>
    </Provider>
  );
}
