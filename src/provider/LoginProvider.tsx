"use client";

import { useEffect } from "react";
import { useAppDispatch } from "./hooks";

export default function LoginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * TODO
   * 로그인 상태 조회 API 호출 -> 로그인 리덕스 상태 업데이트
   */
  return <>{children}</>;
}
