import { atom } from "recoil";

export const isLoginState = atom<boolean | undefined>({
  key: "isLoginState",
  default: undefined, // email
});
