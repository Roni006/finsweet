import Navbar from "./components/Common/Navbar/Navbar"
import Banner from "./Pages/Banner/Banner"
import Blog from "./Pages/Blog/Blog"
import Feature from "./Pages/Feature/Feature"
import Footer from "./Pages/Footer/Footer"
import Inqiry from "./Pages/Inqiry/Inqiry"
import OurClients from "./Pages/OurClients/OurClients"
import OurProject from "./Pages/OurProject/OurProject"
import Work from "./Pages/Work/Work"
function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <OurProject />
      <Feature />
      <OurClients />
      <Inqiry />
      <Blog />
      <Footer />
    </>
  )
}

export default App
