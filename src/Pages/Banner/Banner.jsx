// ! react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ! react slick 
import Container from '../../components/Common/Container'
import banner from "../../assets/images/banner-bg.png"
import img from '../../assets/blog/blog2.png'
import img2 from '../../assets/blog/blog3.png'

const Banner = () => {
    var settings = { 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipe: true
    };
    return (
      <>
        <section className="bg-[#1C1E53] sm:py-[126px] py-[60px] ">
          <Container>
            <div className="maintContent flex flex-col-reverse md:flex-row items-center jsuctify-center gap-10">
              <div className="sm:w-[582px] md:w-[450px] lg:w-[580px] w-[400px] mx-auto">
                <h1 className=" text-[35px] xl-text-[54px] md:-[45px] sm:text-[45px] leading-[50px] sm:leading-[74px] md:leading-[60px] text-[#ffffff] font-poppins font-bold ">
                  Building stellar websites for early startups
                </h1>
                <p className="gbls w-[300px] sm:w-[562px] lg:w-[400px] pt-6 pb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div className="button flex items-center sm:gap-10 gap-5">
                  <a
                    href="#"
                    className="sm:text-[18px] text-[16px] leading-8 font-manrope font-semibold bg-[#FCD980] sm:py-4 py-2 sm:px-14 px-3 rounded-[40px] inline-block border border-[#FCD980] duration-200;"
                  >
                    View Our Works
                  </a>
                  <a href="#" id="svg" className="flex items-center gap-4 gbls">
                    View Pricing
                    <span className="text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="12"
                        viewBox="0 0 25 12"
                        fill="currentColor"
                      >
                        <path
                          d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727568 18.9896 -0.0727568 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 5.52344V6.27344H24V5.52344V4.77344H0V5.52344Z"
                          fill="#F4F6FC"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="xl:w-[638px] md:w-[400px] lg:w-[500px] w-[400px] mx-auto">
                <Slider {...settings}>
                  <img src={banner} alt="" />
                  <img src={img} alt="" />
                  <img src={img2} alt="" />
                  <img src={banner} alt="" />
                </Slider>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
}

export default Banner