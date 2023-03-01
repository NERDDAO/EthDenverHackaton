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

const Home: NextPage = () => {
  const { data: signer, isError, isLoading } = useSigner();

  const onLoginClick = async () => {
    if (signer) {
      console.log("signer", signer);
    }
  };

  const feed = Feed();
  console.log("feed", feed);
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">Welcome to Lens</h1>
      </div>
      <Feed />
    </div>
  );
};

export default Home;
