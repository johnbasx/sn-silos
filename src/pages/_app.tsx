import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default appWithTranslation(App);
