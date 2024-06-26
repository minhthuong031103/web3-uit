import './crypto-polyfill.js';
import '@ethersproject/shims';
import '@walletconnect/react-native-compat';
import { StatusBar } from 'expo-status-bar';


import {
    createWeb3Modal,
    defaultWagmiConfig,
    W3mButton,
    Web3Modal,
} from "@web3modal/wagmi-react-native";
import { fantomTestnet } from "viem/chains";
import { WagmiConfig } from "wagmi";

import { SafeAreaView, Text } from "react-native";
import Test from './Test';
// import { useChainId } from 'wagmi';

// // 1. Get projectId at https://cloud.walletconnect.com
const projectId = "5e2909f4e3227726444b53ef7ffd59e7";

// // 2. Create config
const metadata = {
    name: "UIT",
    description: "Web3Modal RN Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
    redirect: {
        native: "YOUR_APP_SCHEME://",
        universal: "YOUR_APP_UNIVERSAL_LINK.com",
    },
};

const chains = [fantomTestnet];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
    projectId,
    chains,
    wagmiConfig,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function App() {
  return (
    <SafeAreaView>
      <>
        <WagmiConfig config={wagmiConfig}>
          <Web3Modal />
          <Text>hello</Text>
          <Test />
          <W3mButton />
        </WagmiConfig>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </>
    </SafeAreaView>
  );
}
