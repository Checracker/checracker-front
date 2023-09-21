"use client";

import useAuth from "@/hooks/useAuth";

export default function Header() {
  const { isLogin } = useAuth();
  return (
    <div>
      <div>{isLogin ? "Log in" : "Not log in"}</div>
    </div>
  );
}
