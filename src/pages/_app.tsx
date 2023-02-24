import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }: AppProps) {
  //at the first render initialRenderComplete is false
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <>
      <NextNProgress
        height={6}
        color='#10b981'
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(App);
