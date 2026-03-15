import { BrowserRouter, Route, Routes } from "react-router"; 
import AboutUs from "./Pages/AboutUsHero/AboutUsHero"; 
import Home from "./components/Home/Home"; 
import RootLayout from "./layout/RootLayout";
import WhoWeAre from "./Pages/WhoWeAre";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/whoweare" element={<WhoWeAre />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
