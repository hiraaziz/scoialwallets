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
  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({
          options: { projectId: "1cd7f081-0a48-4038-9f30-743067be10b8" },
        }),
        facebookWallet({
          options: { projectId: "1cd7f081-0a48-4038-9f30-743067be10b8" },
        }),
        githubWallet({
          options: { projectId: "1cd7f081-0a48-4038-9f30-743067be10b8" },
        }),
        discordWallet({
          options: { projectId: "1cd7f081-0a48-4038-9f30-743067be10b8" },
        }),
        twitterWallet({
          options: { projectId: "1cd7f081-0a48-4038-9f30-743067be10b8" },
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
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default RainbowKitExample;
