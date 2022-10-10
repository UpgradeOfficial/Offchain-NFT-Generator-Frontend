import Helmet from "react-helmet";
import { useMoralis } from "react-moralis";
import { Outlet } from "react-router-dom";
import WalletNotConnected from "../pages/WalletNotConnected";
import Header from "./Header";
import {useLocation} from "react-router-dom"
import SideBar from "./SideBar";
import { useEffect } from "react";

const Layout = () => {
  const {isWeb3Enabled} = useMoralis()
  const location = useLocation()
  const location_path = location.pathname
  useEffect(() => {
    <Helmet>
        <title>Nft Market Place</title>
    </Helmet>
  }, [])
  return (
    <>
      {/* <Helmet>
        
      </Helmet> */}
      <Header />
      {/* <div>
        <SideBar />
      </div> */}
      {isWeb3Enabled || location_path == "/faq"? ( <div>
        <Outlet />
      </div>): (
        <WalletNotConnected/>
      )}
     
    </>
  );
};
export default Layout;
