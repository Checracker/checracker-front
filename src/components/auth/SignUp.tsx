"use client";

import classNames from "classnames";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { LoginFormData } from "@/types/auth";
import LoginInput from "../ui/LoginInput";
import SimpleSelect from "../ui/SimpleSelect";
import { useMemo, useState } from "react";
import ErrorText from "../ui/ErrorText";
import { SelectChangeEvent } from "@mui/material";
import { appRoutes } from "@/constants/appRoutes";

type SignUpFormData = LoginFormData &
  BirthDate & {
    name: string;
  };

type BirthDate = {
  year: number;
  month: number;
  day: number;
};

export default function SignUp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const [selectedMonth, setSelectedMonth] = useState<number>(0);

  const handleSuccessSignUp = (email: string) => {
    router.replace(`${appRoutes.login}?email=${email}`);
  };

  const handleSignUp = (formData: SignUpFormData) => {
    handleSuccessSignUp(formData.email);
  };

  const yearOptions = useMemo(() => {
    const yearLength = new Date().getFullYear() - 1850;
    return Array.from({ length: yearLength }, (_, i) => {
      const year = new Date().getFullYear() - i;
      return { value: year, name: `${year}년` };
    });
  }, []);

  const monthOptions = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      return { value: month, name: `${month}월` };
    });
  }, []);

  const getDayLength = (month: number) => {
    switch (month) {
      case 0:
        return 0;
      case 2:
        return 29;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  };

  const dayOptions = useMemo(() => {
    const dayLength = getDayLength(selectedMonth);
    return Array.from({ length: dayLength }, (_, i) => {
      const day = i + 1;
      return { value: day, name: `${day}일` };
    });
  }, [selectedMonth]);

  const birthDateErrorMessage = useMemo(() => {
    return (
      errors.year?.message || errors.month?.message || errors.day?.message || ""
    );
  }, [errors]);

  return (
    <form
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit((formData) => {
        handleSignUp(formData);
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
        defaultValue={email ?? ""}
      />
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
        type="password"
        placeholder="비밀번호를 입력해주세요"
        errorMessage={errors.password?.message}
      />
      <LoginInput
        register={register("name", {
          required: "이름을 입력해주세요",
          minLength: {
            value: 2,
            message: "이름은 2자 이상 입력해주세요",
          },
          pattern: {
            message:
              "이름은 한글, 영문 대/소문자를 사용해주세요.(특수기호, 공백 사용불가)",
            value: /^[가-힣a-zA-Z]+$/,
          },
        })}
        placeholder="이름을 입력해 주세요"
        errorMessage={errors.name?.message}
      />
      <div>
        <div className="flex gap-[10px]">
          <SimpleSelect
            register={register("year", {
              required: "생년월일을 입력해주세요",
            })}
            className="w-[45%]"
            options={yearOptions}
            label="년도"
            id="year"
          />
          <SimpleSelect
            register={register("month", {
              required: "생년월일을 입력해주세요",
              onChange: (event: SelectChangeEvent) => {
                setSelectedMonth(Number(event.target.value));
              },
            })}
            className="flex-grow"
            options={monthOptions}
            label="월"
            id="month"
          />
          <SimpleSelect
            register={register("day", {
              required: "생년월일을 입력해주세요",
            })}
            className="flex-grow"
            options={dayOptions}
            id="day"
            label="일"
          />
        </div>
        {birthDateErrorMessage && <ErrorText error={birthDateErrorMessage} />}
      </div>
      <button
        type="submit"
        className={classNames(styles.button, "bg-[#DE1A1A] text-[#ffffff]")}
      >
        가입하기
      </button>
    </form>
  );
}
