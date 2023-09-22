"use client";

import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import http from "@/lib/http";
import { login, logout } from "@/state/redux/loginSlice";
import { apiRoutes } from "@/constants/apiRoutes";

export default function LoginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await http.get<{ isLogin: boolean }>(
          apiRoutes.auth.checkLogin,
        );
        if (res.data.isLogin) {
          dispatch(login());
        }
      } catch (error) {
        dispatch(logout());
      }
    };
    checkLogin();
  }, [dispatch]);
  return <>{children}</>;
}
