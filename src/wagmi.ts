import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Chain } from 'wagmi/chains';
import {
  arbitrum,
  base,
  baseGoerli,
  mainnet,
  optimism,
  polygon,
} from 'wagmi/chains';

// ✅ Custom Sepolia definition
const customSepolia: Chain = {
  id: 11155111,
  name: 'Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'SepoliaETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://1rpc.io/sepolia'],
    },
    public: {
      http: ['https://1rpc.io/sepolia'],
    },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
  },
  testnet: true,
};

console.log('ENABLE_TESTNETS:', process.env.NEXT_PUBLIC_ENABLE_TESTNETS);

// ✅ Final Config
export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID from WalletConnect
  chains: [
    customSepolia,
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
  ],
  ssr: true,
});
