import './crypto-polyfill.js';
import '@walletconnect/react-native-compat';

import { StatusBar } from 'expo-status-bar';

import { WagmiConfig } from 'wagmi';
import { mainnet, polygon, arbitrum, fantomTestnet } from 'viem/chains';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  W3mButton,
  Web3Modal,
} from '@web3modal/wagmi-react-native';

import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { useChainId } from 'wagmi';

// // 1. Get projectId at https://cloud.walletconnect.com
const projectId = '5e2909f4e3227726444b53ef7ffd59e7';

// // 2. Create config
const metadata = {
  name: 'UIT',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
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

// const addToken = async () => {
//   const provider = await EthereumProvider.init({
//     projectId,
//     metadata,
//     showQrModal: true,
//     optionalChains: [4002],

//     /*Optional - Add custom RPCs for each supported chain*/
//     rpcMap: {
//       4002: 'https://fantom.api.onfinality.io/public',
//     },
//   });
//   await provider.connect();

//   const result = await provider.request({
//     method: 'wallet_watchAsset',
//     params: {
//       type: 'ERC20',
//       options: {
//         address: '0x00BCf4Ee95444D6aFF032a029080fAFE90C9d53B',
//         symbol: 'MTH',
//         decimals: 18,
//         image:
//           'https://res.cloudinary.com/dci8dhaps/image/upload/v1700155030/logo123_rxylro.png',
//       },
//     },
//   });
// };

export default function App() {
  return (
    <SafeAreaView>
      <WagmiConfig config={wagmiConfig}>
        <Web3Modal />
        <Text>hello</Text>
        <W3mButton />
      </WagmiConfig>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
