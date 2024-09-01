import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TwicInstall } from "@twicpics/components/react";
import "@twicpics/components/style.css";
import Provider from "./Provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Builder",
  description:
    "Build and showcase your professional portfolio with ease. Portfolio Builder allows you to create, manage, and display your work effectively to attract potential employers and clients.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Build and showcase your professional portfolio with ease. Portfolio Builder allows you to create, manage, and display your work effectively to attract potential employers and clients."
          />
        </Head>
        <body className={inter.className}>
          <TwicInstall domain="https://portfoliobuilder.twic.pics" />
          <div data-theme="light" className="">
            <Provider>{children}</Provider>

            <ToastContainer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
