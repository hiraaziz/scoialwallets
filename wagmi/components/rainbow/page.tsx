"use client";
import "@rainbow-me/rainbowkit/styles.css";
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
import { WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { createClient } from "wagmi";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
function RainbowKitExample() {
  const projectId = "1cd7f081-0a48-4038-9f30-743067be10b8";
  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({
          options: { projectId: projectId },
        }),
        facebookWallet({
          options: { projectId: projectId },
        }),
        githubWallet({
          options: { projectId: projectId },
        }),
        discordWallet({
          options: { projectId: projectId },
        }),
        twitterWallet({
          options: { projectId: projectId },
        }),
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
  });

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <div>
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default RainbowKitExample;
