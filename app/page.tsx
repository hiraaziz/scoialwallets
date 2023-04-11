import React from "react";
import RpcProviderExample from "./components/ether/Ether";
import WagmiGoogleExample from "./components/wagmi/Wagmi";
import ConnectKitExample from "./components/connectkit/ConnectKit";

const page = () => {
  return (
    <div className="w-full ">
      <h1 className="font-bold text-3xl bg-black text-white shadow-md h-16 mb-8 text-center ">
        Wallet Connections
      </h1>
      <div className="flex flex-col w-full space-y-10 items-center">
        <div className="p-4 shadow-md w-[320px] md:w-[500px] h-36 rounded-sm flex flex-col justify-between items-center">
          <h1 className="font-bold text-xl">RPC PROVIDER</h1>
          <RpcProviderExample />
        </div>
        <div className="p-4 shadow-md w-[320px]  md:w-[500px] h-52 md:h-40 rounded-sm flex flex-col justify-between items-center">
          <h1 className="font-bold text-xl">WAGMI Google</h1>
          <div className="w-[320px] overflow-x-scroll md:overflow-hidden md:w-[500px] flex md:justify-center px-4">
            <WagmiGoogleExample />
          </div>
        </div>
        <div className="p-4 shadow-md w-[320px] md:w-[500px] h-36 rounded-sm flex flex-col justify-between items-center">
          <h1 className="font-bold text-xl">Connect Kit</h1>
          <ConnectKitExample />
        </div>
      </div>
    </div>
  );
};

export default page;
