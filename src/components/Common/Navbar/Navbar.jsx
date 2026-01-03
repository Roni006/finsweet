// ! image import
import { Link } from "react-router";
import logo from "../../../assets/images/logo.png";
// ! image import
import Container from "../Container";
const Navbar = () => {
  return (
    <>
      <section className="bg-[#1C1E53]">
        <Container>
          <div className="mainContent flex items-center justify-between py-10">
            <div className="content1">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="content2 flex items-center gap-12">
              <div className="menus">
                <ul className="flex items-center gap-8">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Features</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="btn">
                <Link
                  to="/contact"
                  className="button py-4 px-12 border-2 border-[rgba(244,246,252,0.2)] rounded-[40px] cursor-pointer font-medium "
                >
                  Contact Us
                </Link>
                {/* <button className='py-4 px-12 border-2 border-[rgba(244,246,252,0.2)] rounded-[40px] cursor-pointer font-medium '>Contact Us</button> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
