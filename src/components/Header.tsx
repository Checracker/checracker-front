"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <button onClick={() => router.push("/")}>home</button>
      {/* <Link href="/">home</Link> */}
    </header>
  );
}
