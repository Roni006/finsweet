import { BrowserRouter, Route, Routes } from "react-router"; 
import AboutUs from "./Pages/AboutUs/AboutUs"; 
import Home from "./Pages/Home/Home"; 
import RootLayout from "./layout/RootLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
