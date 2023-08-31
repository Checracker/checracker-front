"use client";

import classNames from "classnames";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import ErrorText from "../ui/ErrorText";
import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginFormData = {
  email: string;
  password: string;
};

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
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const checkLogin = () => {
    // TODO 앱 경로 상수로 만들기 => CHEC-53
    router.replace("/board");
  };

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit((data) => {
        setSubmittedEmail(data.email);

        // TODO 로그인 로직 app/api 이용해서 임시 구현하기 => CHEC-54
        data.password && checkLogin();
      })}
    >
      <input
        {...register("email", {
          required: "이메일 주소를 입력해주세요",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "형식에 맞지 않는 이메일입니다",
          },
        })}
        className={styles.input}
        placeholder="이메일주소를 입력해주세요"
      />
      {errors.email && <ErrorText error={`${errors.email.message ?? ""}`} />}
      {submittedEmail && (
        <input
          {...register("password", {
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
          type="password"
          className={styles.input}
          placeholder="비밀번호를 입력해주세요"
        />
      )}
      {errors.password && (
        <ErrorText error={`${errors.password.message ?? ""}`} />
      )}
      <button
        type="submit"
        className={classNames(
          styles.button,
          "mt-4 bg-[#DE1A1A] text-[#ffffff]",
        )}
      >
        시작하기
      </button>
    </form>
  );
}
