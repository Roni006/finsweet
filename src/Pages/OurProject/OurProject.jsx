// ! image import 
import work1 from '../../assets/ourwork/ourwork1.png';
import work2 from '../../assets/ourwork/ourwork2.png';
import work3 from '../../assets/ourwork/ourwork3.png';
// ! image import 

import Container from '../../components/Common/Container'
import { HiArrowLongRight } from "react-icons/hi2";


const OurProject = () => {
    return (
        <section className='py-[128px] '>
            <Container>
                <div>
                    <div className='flex items-center justify-between mb-[64px]'>
                        <h1 className='gbl-blog'>View our projects</h1>
                        <a href='#' className='flex items-center gap-4 gblf'>View Project <HiArrowLongRight />
                        </a >
                    </div>
                    <div className='maindiv flex items-center gap-8'>
                        <div className="w-[843px] relative group overflow-hidden">
                            <div
                                className=" 
                                    bg-[linear-gradient(329.39deg,_#1C1E53_-10.96%,_rgba(28,30,83,0.42)_103.96%)]
                                    w-[400px] h-[600px]
                                    absolute
                                    flex flex-col justify-end
                                    ps-[48px] pe-[37px]
                                    
                                    -translate-x-full opacity-0
                                    transition-all duration-500 ease-in-out
                                    group-hover:translate-x-0
                                    group-hover:opacity-100">
                                <h4 className="text-[24px] leading-9 font-medium font-poppins text-[#fff]">
                                    Workhub office Webflow Webflow Design
                                </h4>

                                <p className="gblin mt-4 mb-10">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                                </p>

                                <a className="flex items-center gap-4 text-[16px] leading-7 font-poppins font-medium mb-[76px] text-[#FCD980] cursor-pointer">
                                    View Project <HiArrowLongRight className="text-[18px]" />
                                </a>
                            </div>
                            <img src={work1} alt="" className="ourImg" />
                        </div>
                        <div className='flex flex-col items-center gap-9'>
                            <div className="w-[400px] relative group overflow-hidden">
                                <div
                                    className=" 
                                    bg-[linear-gradient(329.39deg,_#1C1E53_-10.96%,_rgba(28,30,83,0.42)_103.96%)]
                                    
                                    absolute
                                    flex flex-col justify-end
                                    ps-[48px] pe-[37px]
                                    h-full w-full
                                    -translate-x-full opacity-0
                                    transition-all duration-500 ease-in-out
                                    group-hover:translate-x-0
                                    group-hover:opacity-100">
                                    <h4 className="text-[24px] leading-9 font-medium font-poppins text-[#fff] mb-2.5 w-[250px]">
                                        Unisaas Website
                                        Design
                                    </h4>

                                    <a className="flex items-center gap-4 text-[16px] leading-7 font-poppins font-medium mb-[45px] text-[#FCD980] cursor-pointer">
                                        View Porfolio <HiArrowLongRight className="text-[18px]" />
                                    </a>
                                </div>
                                <img src={work2} alt="" className="ourImg" />
                            </div>
                            <div className="w-[400px] relative group overflow-hidden">
                                <div
                                    className=" 
                                    bg-[linear-gradient(329.39deg,_#1C1E53_-10.96%,_rgba(28,30,83,0.42)_103.96%)]
                                    
                                    absolute
                                    flex flex-col justify-end
                                    ps-[48px] pe-[37px]
                                    h-full w-full
                                    -translate-x-full opacity-0
                                    transition-all duration-500 ease-in-out
                                    group-hover:translate-x-0
                                    group-hover:opacity-100">
                                    <h4 className="text-[24px] leading-9 font-medium font-poppins text-[#fff] mb-2.5 w-[250px]">
                                        Unisaas Website
                                        Design
                                    </h4>

                                    <a className="flex items-center gap-4 text-[16px] leading-7 font-poppins font-medium mb-[45px] text-[#FCD980] cursor-pointer">
                                        View Portfolio <HiArrowLongRight className="text-[18px]" />
                                    </a>
                                </div>
                                <img src={work3} alt="" className="ourImg" />
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurProject