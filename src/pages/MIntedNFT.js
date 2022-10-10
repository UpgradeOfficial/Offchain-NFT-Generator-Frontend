import React from 'react'
import { GET_MINTED_NFT } from '../utils/subgraphQuery'
import {  useQuery } from "@apollo/client";
import NFTCard from '../components/NFTCard';
import Spinner from '../components/Spinner';
const MIntedNFT = () => {

  
  const {loading, error, data: mintedNfts} = useQuery(GET_MINTED_NFT)
  return (
    <div>
   {
    loading ? (
      <div className='min-h-screen grid place-content-center'><Spinner/></div>
    ) : ( <div>
      {mintedNfts.nftminteds.map(nft=> (
        <NFTCard key={nft.tokenId}/>
      ))}
    </div>)
   }

   </div>
  )
}

export default MIntedNFT