"use client";

import { useForm } from "react-hook-form";
import ErrorText from "./ErrorText";
import styles from "./LoginInput.module.css";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  register: ReturnType<ReturnType<typeof useForm>["register"]>;
  errorMessage?: string;
};
export default function LoginInput({
  register,
  errorMessage,
  ...others
}: Props) {
  return (
    <div>
      <input {...register} className={styles.input} {...others} />
      {errorMessage && <ErrorText error={`${errorMessage ?? ""}`} />}
    </div>
  );
}
