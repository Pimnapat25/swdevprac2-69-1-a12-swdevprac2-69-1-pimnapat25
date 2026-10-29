import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import ReduxProvider from "@/redux/ReduxProvider";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Find and book the perfect venue for every occasion.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NextAuthProvider session={session}>
          <ReduxProvider>
            <TopMenu />
            <div className="pt-16">{children}</div>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
