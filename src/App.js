import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MissingPage from "./pages/MissingPage";
import MIntedNFT from "./pages/MIntedNFT";
import FAQ from "./pages/FAQ";
import Test from "./pages/Test";

// import ManualHeader from './components/ManualHeader';
// the below can be used to control the head file
// import { Helmet } from "react-helmet";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes  */}
        <Route index element={<Home />} />
        <Route path="mint-nft" element={<MIntedNFT />} />
        <Route path="faq" element={<FAQ />} />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
