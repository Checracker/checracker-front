import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Checracker",
  description: "Checracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen ">
        <Header />
        <main>
          <Providers>{children}</Providers>
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
