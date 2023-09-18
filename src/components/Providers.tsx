"use client";

import { store } from "@/provider/store";
import { Provider } from "react-redux";
import ThemeRegistry from "./ThemeRegistry";
import { RecoilRoot } from "recoil";

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <ThemeRegistry>{children}</ThemeRegistry>
      </RecoilRoot>
    </Provider>
  );
}
