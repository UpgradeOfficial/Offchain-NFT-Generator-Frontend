import React, { useState, useEffect } from "react";
import { useMoralis , useWeb3Contract } from "react-moralis";
import { contractAddress, abi } from "../utils/constants";

const NFTCard = ({ token }) => {
  const { chainId: chainIdHex, isWeb3Enabled, account} = useMoralis();
  const [imageURI, setImageURI] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");
  const chainId = parseInt(chainIdHex);
  const OffNFTAddress =
    chainId in contractAddress
      ? contractAddress[chainId][contractAddress[chainId].length - 1]
      : null;

  const { runContractFunction: getTokenDetails } = useWeb3Contract({
    abi,
    contractAddress: OffNFTAddress,
    functionName: "getImageDetailsByToken",
    params: {
      token: token,
    },
  });

  async function updateUI() {
    const tokenURI = (await getTokenDetails())[0];
    
    // // We are going to cheat a little here...
    // if (tokenURI) {
    //   // IPFS Gateway: A server that will return IPFS files from a "normal" URL.
    //   // const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    //   // const tokenURIResponse = await (await fetch(requestURL)).json();
    //   // const imageURI = tokenURIResponse.image;
    //   // const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    //   // setImageURI(imageURIURL);
    //   // setTokenName(tokenURIResponse.name);
    //   // setTokenDescription(tokenURIResponse.description);
    //   // We could render the Image on our sever, and just call our sever.
    //   // For testnets & mainnet -> use moralis server hooks
    //   // Have the world adopt IPFS
    //   // Build our own IPFS gateway
    // }
    // get the tokenURI
    // using the image tag from the tokenURI, get the image
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [isWeb3Enabled]);
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src="/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Mint
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
