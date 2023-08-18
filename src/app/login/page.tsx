import Image from "next/image";
import styles from "./LoginPage.module.css";
import classNames from "classnames";

/**
체크래커 로그인 화면 UI 그리기
로그인화면 반응형 UI
로그인 폼 검증
Next auth 붙이기
 */
export default function LoginPage() {
  return (
    <div className="flex">
      <div className="w-0 h-screen bg-cover md:w-3/5 bg-checked-pattern"></div>
      <section className="flex items-center justify-center w-full h-screen md:w-2/5">
        <div className={`flex flex-col items-center ${styles.app}`}>
          <Image
            src="/images/cracker.png"
            alt="logo"
            width={164}
            height={164}
          />
          <h1 className={styles.title}>Checracker</h1>
          <input
            className={styles.input}
            placeholder="이메일주소를 입력해주세요"
          />
          <button
            className={classNames(
              styles.button,
              "mt-4 bg-[#DE1A1A] text-[#ffffff]",
            )}
          >
            시작하기
          </button>
          <button
            className={classNames(
              styles.button,
              "mt-[55px] bg-[#ffffff] text-[#000000]",
              styles.border,
            )}
          >
            구글로그인
          </button>
          <button
            className={classNames(styles.button, "mt-[11px] bg-[#FFD910]")}
          >
            카카오 로그인
          </button>
          <button
            className={classNames(
              styles.button,
              "mt-[11px] bg-[#4BBD2E] text-white",
            )}
          >
            네이버 로그인
          </button>
        </div>
      </section>
    </div>
  );
}
