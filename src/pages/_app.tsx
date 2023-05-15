import MainLayout from "@/components/Common/templates/MainLayout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageCustom = NextPage & {
  woLayout?: boolean;
};

type AppPropsWithoutLayout = AppProps & {
  Component: NextPageCustom;
};
export default function App({ Component, pageProps }: AppPropsWithoutLayout) {
  return (
    <>
      {Component.woLayout ? (
        <Component {...pageProps} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}
