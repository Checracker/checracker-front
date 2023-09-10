"use client";

import classNames from "classnames";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signedInUsers } from "@/data/dummy";
import { LoginFormData } from "@/types/auth";
import LoginInput from "../ui/LoginInput";

/**
 * 이메일 로그인
 * - 이메일 주소 입력 -> 시작하기 버튼
 * - 가입된 이메일이 있는 경우 -> 로그인
 * - 가입된 이메일이 없는 경우 -> 회원가입 페이지로 이동 - 논의 필요
 */
export default function EmailLogin() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [showPasswordInput, setShowPasswordInput] = useState<boolean>(false);

  const handleSuccessLogin = () => {
    // TODO 앱 경로 상수로 만들기 => CHEC-53
    router.replace("/board");
  };

  const checkLogin = (formData: LoginFormData) => {
    // 로그인 아이디 입력
    const user = signedInUsers.find((user) => user.email === formData.email);
    if (user) {
      // 가입된 이메일이 있는 경우
      setShowPasswordInput(true);
    } else {
      // 이메일 형식은 맞지만 가입된 이메일이 없는 경우
      router.push(`/signup?email=${formData.email}`);
    }
    if (formData.password && formData.password === user?.password) {
      handleSuccessLogin();
    }
  };

  return (
    <form
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit((formData) => {
        // TODO 로그인 로직 app/api 이용해서 임시 구현하기 => CHEC-54
        checkLogin(formData);
      })}
    >
      <LoginInput
        register={register("email", {
          required: "이메일 주소를 입력해주세요",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "형식에 맞지 않는 이메일입니다",
          },
        })}
        placeholder="이메일주소를 입력해주세요"
        errorMessage={errors.email?.message}
      />
      {showPasswordInput && (
        <LoginInput
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상 입력해주세요",
            },
            pattern: {
              message:
                "숫자와 영어를 섞어서 8자 이상 써주세요 형식에 맞지 않는 비밀번호입니다",
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            },
          })}
          placeholder="비밀번호를 입력해 주세요"
          errorMessage={errors.password?.message}
        />
      )}
      <button
        type="submit"
        className={classNames(styles.button, "bg-[#DE1A1A] text-[#ffffff]")}
      >
        시작하기
      </button>
    </form>
  );
}
