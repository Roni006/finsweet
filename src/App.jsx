import { BrowserRouter, Route, Routes } from "react-router"; 
import Home from "./components/Home/Home"; 
import RootLayout from "./layout/RootLayout";
import WhoWeAre from "./Pages/WhoWeAre/WhoWeAre";
import Process from './Pages/Process/Process';
import MIssionVission from "./Pages/MIssionVission";
import Pricing from "./Pages/Pricing/Pricing";
import Benefit from "./Pages/Benefit/Benefit";
import Feature from "./Pages/Feature/Feature";
import OurTeam from "./Pages/OurTeam/OurTeam";
import FeatureHero from "./Pages/FeatureHero/FeatureHero";
import AboutUs from "./components/AboutUs/AboutUs";
import Logo from "./Pages/Logo/Logo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path={"/aboutus"} element={<AboutUs />} />
            
            {/*! extra  */}
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/process" element={<Process />} />
            <Route path="/vmission" element={<MIssionVission />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/benefit" element={<Benefit />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/featurehero" element={<FeatureHero />} />
            <Route path="/logo" element={<Logo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
