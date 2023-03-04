import { useActiveProfile, useWalletLogin } from "@lens-protocol/react";
import Head from "next/head";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Home() {
  const { execute: login, isPending } = useWalletLogin();
  const { data: profile } = useActiveProfile();

  const { isDisconnected } = useAccount();
  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });
  const onLoginClick = async () => {
    if (isDisconnected) {
      const { connector } = await connectAsync();

      if (connector instanceof InjectedConnector) {
        const signer = await connector.getSigner();
        await login(signer);
      }
    }
  };

  return (
    <>
      <header>
        <h1>Lens SDK</h1>

        <p>
          Example app that demonstrates a possible integration strategy with&nbsp;
          <a href="https://nextjs.org/">NextJS</a>.
        </p>
      </header>
      <main>
        {profile && (
          <p>
            Welcome <b>@{profile.handle}</b>
          </p>
        )}
        {!profile && (
          <button disabled={isPending} onClick={onLoginClick}>
            Log in
          </button>
        )}
      </main>
    </>
  );
}
