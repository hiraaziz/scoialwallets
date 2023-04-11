"use client";
import { useState } from "react";
import {
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
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  WagmiConfig,
} from "wagmi";

const WagmiGoogleExample = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
  });

  const ConnectButton = () => {
    const [loading, setLoading] = useState(false);
    const { connect, error, isLoading, pendingConnector } = useConnect();
    const { address, connector, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();

    const connectWallet = async () => {
      setLoading(true);
      await connect({
        connector: new GoogleSocialWalletConnector({
          options: {
            projectId: "1cd7f081-0a48-4038-9f30-743067be10b8",
          },
        }),
      });
      setLoading(false);
    };

    if (isConnected) {
      return (
        <div>
          <div>{address}</div>
          <div>Connected to {connector?.name}</div>
          <a
            href={`${chain?.blockExplorers?.default.url}/address/${address}`}
            target="_blank"
          >
            Explorer
          </a>
          <br />
          <button
            onClick={() => {
              disconnect();
            }}
          >
            Disconnect
          </button>
        </div>
      );
    }
    return (
      <button
        disabled={isLoading || loading}
        onClick={connectWallet}
        className="bg-blue-800 rounded-md shadow-sm text-white py-2 px-4 tracking-wider font-medium"
      >
        {isLoading || loading ? "loading..." : "Connect to Google"}
      </button>
    );
  };

  return (
    <WagmiConfig client={client}>
      <ConnectButton />
    </WagmiConfig>
  );
};
export default WagmiGoogleExample;
// 0xfaB2Bc75C9058d9253C1d8624fB6bfb28cCF2013 - Google
//0x52BbBcCf068A5661800e2d0750a803D62cb99E12 - Github
