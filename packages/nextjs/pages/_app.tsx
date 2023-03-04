import "~~/styles/globals.css";

import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { lensConfig } from "~~/services/web3/lensConfig";
import { BlockieAvatar } from "~~/components/scaffold-eth";

import Header from "~~/components/Header";
import Footer from "~~/components/Footer";

import { useEffect } from "react";
import { useAppStore } from "~~/services/store/store";
import { useEthPrice } from "~~/hooks/scaffold-eth";

import NextNProgress from "nextjs-progressbar";

import toast, { Toaster } from "react-hot-toast";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { LensProvider } from "@lens-protocol/react";

const { provider, webSocketProvider } = configureChains([polygon, mainnet], [publicProvider()]);

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useEthPrice();
  const setEthPrice = useAppStore(state => state.setEthPrice);

  useEffect(() => {
    if (price > 0) {
      setEthPrice(price);
    }
  }, [setEthPrice, price]);

  return (
    <WagmiConfig client={wagmiClient}>
      <NextNProgress />
      <LensProvider config={lensConfig}>
        <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative flex flex-col flex-1">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
          <Toaster />
        </RainbowKitProvider>
      </LensProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
