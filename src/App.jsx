import Navbar from "./components/Common/Navbar/Navbar"
import Banner from "./Pages/Banner/Banner"
import Blog from "./Pages/Blog/Blog"
import Feature from "./Pages/Feature/Feature"
import Inqiry from "./Pages/Inqiry/Inqiry"
import OurClients from "./Pages/OurClients/OurClients"
import Work from "./Pages/Work/Work"
function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <Feature />
      <OurClients />
      <Inqiry />
      <Blog />
    </>
  )
}

export default App
