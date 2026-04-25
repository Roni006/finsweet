import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import RootLayout from "./layout/RootLayout";
import WhoWeAre from "./Pages/WhoWeAre/WhoWeAre";
import Process from "./Pages/Process/Process";
import MIssionVission from "./Pages/MIssionVission";
import Pricing from "./Pages/Pricing/Pricing";
import Benefit from "./Pages/Benefit/Benefit";
import Feature from "./Pages/Feature/Feature";
import OurTeam from "./Pages/OurTeam/OurTeam";
import FeatureHero from "./Pages/FeatureHero/FeatureHero";
import AboutUs from "./components/AboutUs/AboutUs";
import Logo from "./Pages/Logo/Logo";
import BestInClass from "./Pages/BestInClass/BestInClass";
import Rivisions from "./Pages/Rivisions/Rivisions";
import Support from "./Pages/Support/Support";
import Deliver from "./Pages/Deliver/Deliver";
import WorkHero from "./Pages/WorkHero/WorkHero";
import OurWork from "./Pages/OurWork/OurWork";
import CTAAction from "./Pages/CTAAction/CTAAction";
import BlogSummery from "./Pages/BlogSummery/BlogSummery";
import BlogArticle from "./Pages/BlogArticle/BlogArticle";
import Keywords from "./Pages/Keywords/Keywords";
import FeatureBlog from "./Pages/FeatureBlog/FeatureBlog";
import OurBlog from "./Pages/OurBlog/OurBlog";
import BlogHeading from "./Pages/BlogHeading/BlogHeading";
import BlogBody from "./Pages/BlogBody/BlogBody";
import ContactUs from "./Pages/ContactUs/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import FAQ from "./Pages/FAQ/FAQ";
import Features from "./components/Features/Features";
import Works from "./components/Works/Works";
import Blog from "./Pages/Blog/Blog";
import Blogs from "./components/Blog/Blogs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/work" element={<Works />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-police" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
