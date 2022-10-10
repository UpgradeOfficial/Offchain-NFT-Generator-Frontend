import { gql } from "@apollo/client";
export const GET_CREATED_NFT = gql`
  {
    nftcreateds(first: 5) {
      id
      tokenId
      image_url
      price
    }
  }
`;
export const GET_MINTED_NFT = gql`
  {
    nftminteds(first: 5) {
      id
      user
      tokenId
      image_url
    }
  }
`;
