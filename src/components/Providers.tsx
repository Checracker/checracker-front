"use client";

import ThemeRegistry from "./ThemeRegistry";

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return <ThemeRegistry>{children}</ThemeRegistry>;
}
