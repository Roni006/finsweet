// ! react icon 
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import Container from '../../components/Common/Container'
import logo from "../../assets/images/logo.png"
const Footer = () => {
    return (
        <section className='bg-[#1C1E53] pt-[96px] '>
            <Container>
                <div className='flex items-center gap-[260px]'>
                    <div className='w-[401px]'>
                        <img src={logo} alt="" />
                        <p className='gblin mt-[22px]'>We are always open to discuss your project and improve your online presence.</p>
                    </div>
                    <div className='w-[400px]'>
                        <h2 className='text-[48px] leading-16 font-semibold font-poppins text-[#ffffff]'>Let's Talk</h2>
                        <p className='gblin mt-[14px] '>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className='icons flex items-center gap-7 mt-[26px] '>
                            <FaFacebook className="text-[#fff] text-[18px]" />
                            <FaTwitter className="text-[#fff] text-[18px]" />
                            <FaInstagram className="text-[#fff] text-[18px]" />
                            <FaLinkedin className="text-[#fff] text-[18px]" />

                        </div>
                    </div>
                </div>

                <div className='w-[550px] bg-[#fcd980] mt-[60px] py-4 ps-[37px] pe-[137px] flex items-center gap-[30px]'>
                    <div>
                        <h5 className='text-[18px] leading-8 font-poppins font-medium text-[#282938]'>Email me at</h5>
                        <p className='gblf'>contact@website.com</p>
                    </div>
                    <div>
                        <h5 className='text-[18px] leading-8 font-poppins font-medium text-[#282938]'>Call us</h5>
                        <p className='gblf'>0927 6277 28525</p>
                    </div>
                </div>
            </Container>
            <div className="bg-[#fff] py-8">
                <Container>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="gblf">Copyright 2022, Finsweet.com</p>
                        </div>
                        <div className="content2 flex items-center gap-12">
                            <div className='text-[16px] leading-7 font-poppins text-[#282938] font-medium '>
                                <ul className='flex items-center gap-8'>
                                    <li><a href="#" >Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Footer

