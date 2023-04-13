"use client";
import { supportedSocialConnectors } from "@zerodevapp/wagmi/connectkit";
import { supportedConnectors } from "connectkit";
supportedConnectors.push(...supportedSocialConnectors);

import {
  SocialWalletConnector,
  GoogleSocialWalletConnector,
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from "@zerodevapp/wagmi";
import { configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { createClient } from "wagmi";
import { WagmiConfig } from "wagmi";
import {
  getDefaultClient,
  ConnectKitProvider,
  ConnectKitButton,
} from "connectkit";

function ConnectKitExample() {
  const options = {
    options: { projectId: "1cd7f081-0a48-4038-9f30-743067be10b8" },
  };
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient(
    getDefaultClient({
      appName: "Your App Name",
      chains: [polygonMumbai],
      provider,
      connectors: [
        new GoogleSocialWalletConnector(options),
        new FacebookSocialWalletConnector(options),
        new GithubSocialWalletConnector(options),
        new DiscordSocialWalletConnector(options),
        new TwitchSocialWalletConnector(options),
        new TwitterSocialWalletConnector(options),
      ],
      autoConnect: false,
    })
  );

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
export default ConnectKitExample;
