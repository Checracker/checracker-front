import Image from "next/image";
import styles from "./LoginPage.module.css";
import classNames from "classnames";
import loginStyles from "src/components/login/Login.module.css";
import EmailLogin from "@/components/login/EmailLogin";

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="w-0 h-screen bg-cover md:w-3/5 bg-checked-pattern"></div>
      <section className="flex items-center justify-center w-full h-screen p-5 md:w-2/5">
        <div className={`flex flex-col items-center ${styles.app}`}>
          <Image
            src="/images/cracker.png"
            alt="logo"
            width={164}
            height={164}
          />
          <h1 className={styles.title}>Checracker</h1>
          <EmailLogin />
          <button
            className={classNames(
              loginStyles.button,
              "mt-[55px] bg-[#ffffff] text-[#000000]",
              styles.border,
            )}
          >
            {/* TODO: 로그인 로고 적용 => CHEC-49 */}
            구글로그인
          </button>
          <button
            className={classNames(loginStyles.button, `mt-[11px] bg-[#FEE500]`)}
          >
            {/* TODO: 로그인 로고 적용 => CHEC-49 */}
            카카오 로그인
          </button>
          <button
            className={classNames(
              loginStyles.button,
              `mt-[11px] bg-[#03C75A] text-white`,
            )}
          >
            {/* TODO: 로그인 로고 적용 => CHEC-49 */}
            네이버 로그인
          </button>
        </div>
      </section>
    </div>
  );
}
