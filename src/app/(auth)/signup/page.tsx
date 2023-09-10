import Image from "next/image";
import styles from "../LoginPage.module.css";
import SignUp from "@/components/auth/SignUp";

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
          <SignUp />
        </div>
      </section>
    </div>
  );
}
