import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useState } from 'react';
import { parseEther } from 'viem';
import { useSendTransaction, useWriteContract, useReadContract, useAccount } from 'wagmi';
import { FACE_NFT_ABI } from '../lib/faceNFT';

const Home: NextPage = () => {
  const [value, setValue] = useState<number>(0);
  const [transferRecipient, setTransferRecipient] = useState<string>('');
  const [mintRecipient, setMintRecipient] = useState<string>('');
  const [tokenURI, setTokenURI] = useState<string>('');
  const [tokenID, setTokenID] = useState<number>(0);

  const CONTRACT_ADDRESS = '0x78448900457e3F4793fa9B8d3b8bB910e1dAcf3F';

  const { isConnected } = useAccount();

  const { data: hashWriteTx, writeContract } = useWriteContract();
  const { data: hashSendTx, sendTransaction } = useSendTransaction();

  const { data: tokenURIData }: { data: string | undefined } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: FACE_NFT_ABI,
    functionName: 'tokenURI',
    args: [tokenID],
    enabled: isConnected && tokenID >= 0, // ✅ Avoids AbortError when disconnected or invalid tokenID
  });

  const handleSubmitTransfer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      sendTransaction({
        to: transferRecipient as `0x${string}`,
        value: parseEther(value.toString()),
      });
    } catch (err) {
      console.error('Transfer Error:', err);
    }
  };

  const handleSubmitMint = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: FACE_NFT_ABI,
        functionName: 'safeMint', // ✅ fixed: was 'safemint'
        args: [mintRecipient as `0x${string}`, tokenURI],
      });
    } catch (err) {
      console.error('Mint Error:', err);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 space-y-4 bg-lime-100 min-h-screen">
      <ConnectButton />
      <div className="space-y-4 p-4 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Send Transaction</h2>
        <form onSubmit={handleSubmitTransfer} className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="mr-2">Recipient</label>
            <input
              type="text"
              value={transferRecipient}
              onChange={(e) => setTransferRecipient(e.target.value)}
              className="w-64 p-1 border rounded border-gray-300"
            />
          </div>

          <div className="flex items-center">
            <label className="mr-9">Value</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(parseFloat(e.target.value))}
              className="w-64 p-1 border rounded border-gray-300"
            />
          </div>

          <button
            className="bg-blue-500 text-white rounded p-2 disabled:opacity-50"
            type="submit"
            disabled={!isConnected}
          >
            Send Ether
          </button>
        </form>
      </div>

      <div className="space-y-4 p-4 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Mint NFT</h2>
        <form onSubmit={handleSubmitMint} className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="mr-2">Recipient:</label>
            <input
              type="text"
              value={mintRecipient}
              onChange={(e) => setMintRecipient(e.target.value)}
              className="w-64 p-1 border rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-1">Token URI:</label>
            <input
              type="text"
              value={tokenURI}
              onChange={(e) => setTokenURI(e.target.value)}
              className="w-64 p-1 border rounded"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={!isConnected}
          >
            Mint NFT
          </button>
        </form>
      </div>

      <div className="space-y-4 p-4 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Get Token URI</h2>
        <div className="flex items-center">
          <label className="mr-2">Token ID:</label>
          <input
            type="number"
            value={tokenID}
            onChange={(e) => setTokenID(parseInt(e.target.value))}
            className="w-64 p-1 border rounded"
          />
        </div>
        <div>
          <p className="text-center">
            Token URI: {tokenURIData?.toString() || 'No URI found'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
