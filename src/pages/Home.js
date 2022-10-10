import React, { useEffect } from 'react'
import NFTCard from '../components/NFTCard'
import {  useQuery } from "@apollo/client";
import { GET_CREATED_NFT } from '../utils/subgraphQuery';
import Spinner from '../components/Spinner';

const Home = () => {
  const {loading, error, data: uploadedNfts} = useQuery(GET_CREATED_NFT)

  return (
    <div>
   {
    loading ? (
      <div className='min-h-screen grid place-content-center'><Spinner/></div>
    ) : ( <div className='grid grid-cols-3 gap-4'>
      {uploadedNfts.nftcreateds.map(nft=> (
        <NFTCard  key={nft.tokenId} token={nft.tokenId}/>
      ))}
    </div>)
   }

   </div>
    
  )
}

export default Home