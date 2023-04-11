"use client";
import { useState, useMemo } from "react";
import { getZeroDevSigner, getSocialWalletOwner } from "@zerodevapp/sdk";

import { SocialWallet } from "@zerodevapp/social-wallet";

function RpcProviderExample() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const socialWallet = useMemo(() => {
    return new SocialWallet();
  }, []);

  const createWallet = async () => {
    setLoading(true);
    const signer = await getZeroDevSigner({
      projectId: "1cd7f081-0a48-4038-9f30-743067be10b8",
      owner: await getSocialWalletOwner(
        "1cd7f081-0a48-4038-9f30-743067be10b8",
        socialWallet
      ),
    });
    setAddress(await signer.getAddress());
    setLoading(false);
  };

  const disconnect = async () => {
    await socialWallet.disconnect();
    setAddress("");
  };

  const connected = !!address;

  return (
    <div>
      {connected && (
        <div className="w-[300px] overflow-x-scroll md:w-[500px] md:overflow-hidden">
          <label>Wallet: {address}</label>
        </div>
      )}
      <div>
        {!connected && (
          <button
            onClick={createWallet}
            disabled={loading}
            className="bg-blue-800 rounded-md shadow-sm text-white py-2 px-4 tracking-wider font-medium"
          >
            {loading ? "loading..." : "Create Wallet"}
          </button>
        )}
        {connected && (
          <button onClick={disconnect} disabled={loading}>
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
}
export default RpcProviderExample;
