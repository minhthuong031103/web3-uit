import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
const Test = () => {
  const { connector } = useAccount();
  const addToken = async () => {
    const provider = await connector?.getProvider();
    console.log('🚀 ~ addToken ~ provider:', provider);
    const tokenAddress = '0x00BCf4Ee95444D6aFF032a029080fAFE90C9d53B';

    if (provider) {
      const web3Provider = new ethers.providers.Web3Provider(provider);
      console.log('🚀 ~ addToken ~ web3Provider:', web3Provider);
      const signer = web3Provider.getSigner();

      const test = await provider?.request({
        method: 'eth_requestAccounts',
        params: [],
      });
      console.log('🚀 ~ addToken ~ test:', test);

      const result = await provider?.signer?.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: 'MTH',
            decimals: 18,
            image:
              'https://res.cloudinary.com/dci8dhaps/image/upload/v1700155030/logo123_rxylro.png',
          },
        },
      });
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={addToken}>
        <Text>Add token</Text>
      </TouchableOpacity>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
