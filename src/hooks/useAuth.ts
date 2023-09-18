import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { isLoginState } from "@/state/recoil/userState";
import http from "@/lib/http";
import { useRouter } from "next/navigation";
import { apiRoutes } from "@/constants/apiRoutes";
import { appRoutes } from "@/constants/appRoutes";

export default function useAuth() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const router = useRouter();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const res = await http.post(apiRoutes.auth.login, { email, password });
        setIsLogin(true);
        router.replace(appRoutes.home);
        return res;
      } catch (error) {
        // TODO 토스트 메시지로 변경
        console.error(error);
        alert("로그인 실패");
        setIsLogin(false);
      }
    },
    [setIsLogin, router],
  );

  const logout = useCallback(async () => {
    try {
      const res = await http.post(apiRoutes.auth.logout);
      setIsLogin(false);
      router.replace(appRoutes.login);
      return res;
    } catch (error) {
      // TODO 토스트 메시지로 변경
      console.error(error);
      alert("로그아웃 실패");
    }
  }, [setIsLogin, router]);

  const checkEmail = useCallback(async (email: string) => {
    try {
      const res = await http.post<{ isSignedIn: boolean }>(
        apiRoutes.auth.checkEmail,
        { email },
      );
      return res;
    } catch (error) {
      // TODO 토스트 메시지로 변경
      console.error(error);
      alert("이메일 중복 확인 실패");
    }
  }, []);

  return {
    isLogin,
    login,
    logout,
    checkEmail,
  };
}
