"use client";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from "@zerodevapp/wagmi/rainbowkit";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { createClient } from "wagmi";
import { WagmiConfig } from "wagmi";
import RainbowKitConnectButton from "./Connect";

function RainbowKitExample() {
  const defaultProjectId = "1cd7f081-0a48-4038-9f30-743067be10b8";
  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({ options: { projectId: defaultProjectId } }),
        facebookWallet({ options: { projectId: defaultProjectId } }),
        githubWallet({ options: { projectId: defaultProjectId } }),
        discordWallet({ options: { projectId: defaultProjectId } }),
        twitchWallet({ options: { projectId: defaultProjectId } }),
        twitterWallet({ options: { projectId: defaultProjectId } }),
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <RainbowKitConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default RainbowKitExample;
