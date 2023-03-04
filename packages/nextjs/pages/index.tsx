import type { NextPage } from "next";
import Head from "next/head";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useWalletLogin } from "@lens-protocol/react";
import { useAccount, useConnect, useDisconnect, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useProfile } from "@lens-protocol/react";
import { Feed } from "~~/components/feeed";
import { LoginButton } from "~~/components/auth/LoginButton";
import { WhenLoggedInWithProfile } from "~~/components/auth/WhenLoggedInWithProfile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LenScholar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"
        />
      </Head>
      <header>
        <h1>LenScholar</h1>
      </header>
      <main style={{ margin: "auto" }}>
        <Feed />
      </main>
    </>
  );
};
export default Home;
