import React, { useState } from "react";
import { ConnectButton } from "web3uikit";
import { Link, useLocation } from "react-router-dom"
import { useMoralis } from "react-moralis";

const Header = () => {
  const {isWeb3Enabled} = useMoralis()
  const location = useLocation()
  const location_path = location.pathname
  const [isActive, setIsActive] = useState(false)
  const [path, setPath] = useState(location_path)
  const handleClick = () =>{
      setIsActive(!isActive)
  }
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a to="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            OffChain-NFT
          </span>
        </a>
        <div className="flex md:order-2">
          <ConnectButton moralisAuth={false} />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={handleClick}
            
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${isActive ? "": "hidden"} justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className={`${path === "/" ? "" : ""}flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            <li>
              <Link
                to="/"
                className={`${path === "/" ? " md:text-blue-700 text-blue" : "md:text-gray-700"} block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent dark:text-white md:p-0`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {isWeb3Enabled && <li>
            
              <Link
                to="mint-nft"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Minted-NFT
              </Link>
            </li>}
            <li>
              <Link
                to="faq"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
               FAQ
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
