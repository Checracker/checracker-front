import { Theme, themedPalette } from "@/styles/theme";
import { useState } from "react";

/**
 * TODO 서버사이드에서도 사용할 수 있도록 수정하기 -> CHEC-50
 * - 동작안되고 있음
 */
export default function useColor() {
  // TODO redux state로 바꾸기 => CHEC-48
  const [theme] = useState<Theme>("light");

  const color = themedPalette(theme);

  return color;
}
