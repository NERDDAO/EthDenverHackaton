import type { NextPage } from "next";
import Head from "next/head";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useWalletLogin } from "@lens-protocol/react";
import { useAccount, useConnect, useDisconnect, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useProfile } from "@lens-protocol/react";

const Home: NextPage = () => {
  const { login, error: loginError, isPending: isLoginPending } = useWalletLogin();

  const { data: signer, isError, isLoading } = useSigner();

  const onLoginClick = async () => {
    if (signer) {
      console.log("signer", signer);
    }
  };
  return (
    <div>
      {loginError && <p>{loginError.message}</p>}
      <button disabled={isLoginPending} onClick={onLoginClick}>
        Log in
      </button>
      <div>
        <h1 className="text-4xl font-bold text-center">Welcome to Lens</h1>
      </div>
    </div>
  );
};

export default Home;
