import Navbar from "./components/Common/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Banner from "./Pages/Banner/Banner";
import Benefit from "./Pages/Benefit/Benefit";
import Blog from "./Pages/Blog/Blog";
import Feature from "./Pages/Feature/Feature";
import Footer from "./Pages/Footer/Footer";
import Inqiry from "./Pages/Inqiry/Inqiry";
import OurClients from "./Pages/OurClients/OurClients";
import OurMission from "./Pages/OurMission/OurMission";
import OurProject from "./Pages/OurProject/OurProject";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Pricing from "./Pages/Pricing/Pricing";
import Process from "./Pages/Process/Process";
import WhoWe from "./Pages/WhoWe/WhoWe";
import Work from "./Pages/Work/Work";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter> */}

      <Navbar />
      {/* <Banner />
      <Work />
      <OurProject />
      <Feature />
      <OurClients />
      <Inqiry />
      <Blog />
      <AboutUs />
      <WhoWe />
      <Process />
      <OurMission />
      <Benefit />
      <OurTeam /> */}
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
