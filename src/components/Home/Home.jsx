import Banner from "../../Pages/Banner/Banner";
import Work from "../../Pages/Work/Work";
import OurProject from "../../Pages/OurProject/OurProject";
import Feature from "../../Pages/Feature/Feature"; 
import Inqiry from "../../Pages/Inqiry/Inqiry";
import Blog from "../../Pages/Blog/Blog"; 
import FAQ from "../../Pages/FAQ/FAQ";   
import Testimonials from "../../Pages/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Work />
      <OurProject /> 
      <Feature/> 
      <Testimonials/>
      <FAQ/> 
      <Inqiry/>
      <Blog/>
    </>
  );
};

export default Home;
