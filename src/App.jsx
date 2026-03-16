import { BrowserRouter, Route, Routes } from "react-router"; 
import AboutUs from "./Pages/AboutUsHero/AboutUsHero"; 
import Home from "./components/Home/Home"; 
import RootLayout from "./layout/RootLayout";
import WhoWeAre from "./Pages/WhoWeAre/WhoWeAre";
import Process from './Pages/Process';
import MIssionVission from "./Pages/MIssionVission";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/process" element={<Process />} />
            <Route path="/vmission" element={<MIssionVission />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
