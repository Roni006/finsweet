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
            <Route path="/bestClass" element={<BestInClass />} />
            <Route path="/rivisions" element={<Rivisions />} />
            <Route path="/support" element={<Support />} />
            <Route path="/deliver" element={<Deliver />} />
            <Route path="/workhero" element={<WorkHero />} />
            <Route path="/ourwork" element={<OurWork />} />
            <Route path="/action" element={<CTAAction />} />
            <Route path="/blogsummer" element={<BlogSummery />} />
            <Route path="/blogarticle" element={<BlogArticle />} />
            <Route path="/keyword" element={<Keywords />} />
            <Route path="/featureblog" element={<FeatureBlog />} />
            <Route path="/ourblog" element={<OurBlog />} />
            <Route path="/blogheading" element={<BlogHeading />} />
            <Route path="/blogbody" element={<BlogBody />} />
            <Route path="/contactus" element={<ContactUs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
