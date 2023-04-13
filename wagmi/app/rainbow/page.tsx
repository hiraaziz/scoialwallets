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
  const projectId =
    "BDnXx3nIoms1zqtd4z6B1ud4zCE261GoMcPb0LP4QI4lA2J1Q60esCWm_XZri-AVSFOHKY2cE620zU57aasRxYQ";
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
