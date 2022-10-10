import React from "react";
import { gql, useQuery } from "@apollo/client";
const GET_CREATED_NFT = gql`
  {
    nftcreateds(first: 5) {
      id
      tokenId
      image_url
      price
    }
  }
`;
const Test = () => {
  const {loading, error, data} = useQuery(GET_CREATED_NFT)
  console.log(data)
  return (
    <div>Test</div>
  )
};

export default Test;
