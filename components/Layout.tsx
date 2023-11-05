import { ReactNode } from "react";
import Header from "./Header/Header";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Space Tourism </title>
        <meta
          name="description"
          content="Traverse the space and learn everything about it"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
