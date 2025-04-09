// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
// contract Address: 0x78448900457e3F4793fa9B8d3b8bB910e1dAcf3F;
pragma solidity ^0.8.26;

import {ERC721} from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FaceNft is ERC721, ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor()
        ERC721("FaceNft", "FCE")
    {}

    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    } 
}