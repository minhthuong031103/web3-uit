import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';

import marketplaceABI from './abi/marketplace.json';
import nftCollectionABI from './abi/nftcollection.json';
import { useContractRead } from 'wagmi';

import { ethers } from 'ethers';
const Test = () => {
  const { connector } = useAccount();
  const tokenAddress = '0x00BCf4Ee95444D6aFF032a029080fAFE90C9d53B';
  const marketplaceAddress = '0xb304D8378a97a1978C8f06325584384C716c2B86';
  const nftCollectionAddress = '0xBA410E8D44f1846a0926E28cA880E096Ba6401Af';

  // Read all listings from the marketplace
  const {
    data: listings,
    isError: listingsError,
    isLoading: listingsLoading,
  } = useContractRead({
    address: marketplaceAddress,
    abi: marketplaceABI,
    functionName: 'getAllListings',
    args: [0, 10], // Adjust the arguments as necessary
  });

  // Read NFT information for each listing
  const nftDataPromises = listings?.map(async (listing) => {
    const nftData = await useContractRead({
      address: nftCollectionAddress,
      abi: nftCollectionABI,
      functionName: 'tokenURI',
      args: [listing.tokenId],
    });
    return nftData;
  });

  const fetchAllNftData = async () => {
    const nftDataArray = await Promise.all(nftDataPromises);
    console.log('NFT Data:', nftDataArray);
  };
  useEffect(() => {
    fetchAllNftData();
  }, []);
  const addToken = async () => {
    console.log('🚀 ~ Test ~ connector:', connector);

    const provider = await connector?.getProvider();
    if (provider) {
      const web3Provider = new ethers.providers.Web3Provider(provider);

      console.log('🚀 ~ addToken ~ web3Provider:', web3Provider);
      const signer = web3Provider.getSigner();

      const test = await provider?.request({
        method: 'eth_requestAccounts',
        params: [],
      });
      console.log('🚀 ~ addToken ~ test:', test);

      const result = await provider?.request({
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
      console.log('🚀 ~ addToken ~ result:', result);
      console.log('🚀 ~ addToken ~ result:', result);
    }
  };

  const switchNetwork = async () => {
    const provider = await connector?.getProvider();
    if (provider) {
      try {
        const result = await provider?.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xfa2', // Hexadecimal value of 4002
              chainName: 'Fantom Testnet',
              nativeCurrency: {
                name: 'Fantom',
                symbol: 'FTM',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.testnet.fantom.network/'],
              blockExplorerUrls: ['https://testnet.ftmscan.com/'],
            },
          ],
        });
        console.log('🚀 ~ switchNetwork ~ result:', result);
      } catch (error) {
        console.error('Failed to switch network', error);
      }
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={switchNetwork}>
        <Text>Switch to Fantom Testnet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addToken}>
        <Text>Add token</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Connect Wallet</Text>
      </TouchableOpacity>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
