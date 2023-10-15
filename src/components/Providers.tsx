"use client";

import { store } from "@/provider/store";
import { Provider } from "react-redux";
import ThemeRegistry from "./ThemeRegistry";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/emotionTheme";
import LoginProvider from "@/provider/LoginProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeRegistry>
          <LoginProvider>
            <ToastContainer />
            {children}
          </LoginProvider>
        </ThemeRegistry>
      </ThemeProvider>
    </Provider>
    
  );
}
