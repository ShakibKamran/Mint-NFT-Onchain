

```markdown
# 🎨 FaceNFT dApp

A full-stack NFT dApp built with **Next.js**, **RainbowKit**, **Wagmi**, and **viem**, allowing users to:

- 🔗 Connect their wallet
- 💸 Send native ETH
- 🧙‍♂️ Mint NFTs via `safeMint`
- 🔍 Read NFT metadata via `tokenURI`

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, TailwindCSS
- **Wallet Integration**: RainbowKit
- **Blockchain Interaction**: Wagmi + viem
- **Smart Contract**: ERC721-compatible NFT with `safeMint`

---

## 📁 Project Structure

```
/pages
  ── index.tsx         # Main dApp UI
  
/lib
  ── faceNFT.ts        # NFT Contract ABI
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/ShakibKamran/Mint-NFT-Onchain.git
cd nft_minton_ipfs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure RainbowKit & Wagmi

Update your chain & provider settings in `_app.tsx` or `wagmi.config.ts` (if modularized).

### 4. Add the Smart Contract ABI

Put your contract ABI JSON inside `/lib/faceNFT.ts`:

```ts
export const FACE_NFT_ABI = [ /* ABI here */ ];
```

### 5. Run the Development Server

```bash
npm run dev
```

---

## 🧪 Features

### ✅ Wallet Connection

Users can connect via Metamask, WalletConnect, etc.

### ✅ ETH Transfer

Send ETH to any address using `sendTransaction`.

### ✅ NFT Minting

Call `safeMint(address, tokenURI)` from your deployed ERC721 contract.

### ✅ Metadata Reading

Reads `tokenURI(tokenId)` and displays the string.

---

## 📸 UI Screenshots

> _Add screenshots or GIFs here for better preview_

---

## 📝 Example `.env.local` (if needed)

```env
# Only if you're using Alchemy/Infura for provider config
NEXT_PUBLIC_ALCHEMY_KEY=your-alchemy-key
```

---

## 📄 Smart Contract Reference

Ensure your contract has this function:

```solidity
function safeMint(address to, string memory uri) public;
```

---

## 📬 Contact / Feedback

Have ideas or issues? Feel free to open an [Issue](https://github.com/ShakibKamran/Mint-NFT-Onchain.git/issues) or reach out!

---

## 📜 License

MIT © [ShakibKamran] https://github.com/ShakibKamran/Mint-NFT-Onchain.git)
```

---

Would you like me to generate a matching `faceNFT.ts` ABI stub or help you deploy this to Vercel next?
