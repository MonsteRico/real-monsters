import { db } from "@/server/db";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import { Kaushan_Script } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Real Monsters",
  description: "Monsters of mental health",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} flex flex-row`}
        style={{
          backgroundImage: "url(/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
