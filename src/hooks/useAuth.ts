import { useCallback } from "react";
import http from "@/lib/http";
import { useRouter } from "next/navigation";
import { apiRoutes } from "@/constants/apiRoutes";
import { appRoutes } from "@/constants/appRoutes";
import { useAppDispatch, useAppSelector } from "@/provider/hooks";
import {
  login as loginAction,
  logout as logoutAction,
} from "@/state/redux/loginSlice";
import useToast from "./useToast";

export default function useAuth() {
  const isLogin = useAppSelector((state) => state.login.value);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { toast } = useToast();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const res = await http.post(apiRoutes.auth.login, { email, password });
        dispatch(loginAction());
        router.replace(appRoutes.home);
        return res;
      } catch (error) {
        toast("로그인 실패", "error");
        dispatch(logoutAction);
      }
    },
    [router, dispatch, toast],
  );

  const logout = useCallback(async () => {
    try {
      const res = await http.post(apiRoutes.auth.logout);
      dispatch({
        type: "login/logout",
        payload: false,
      });
      router.replace(appRoutes.login);
      return res;
    } catch (error) {
      toast("로그아웃 실패", "error");
    }
  }, [router, dispatch, toast]);

  const checkEmail = useCallback(
    async (email: string) => {
      try {
        const res = await http.post<{ isSignedIn: boolean }>(
          apiRoutes.auth.checkEmail,
          { email },
        );
        return res;
      } catch (error) {
        toast("이메일 중복 확인 실패", "error");
      }
    },
    [toast],
  );

  return {
    isLogin,
    login,
    logout,
    checkEmail,
  };
}
