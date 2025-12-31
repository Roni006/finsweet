import React from 'react'
import Container from '../../components/Common/Container'
import whoBg from "../../assets/about-bg/who-bg.png"

const WhoWe = () => {
    return (
        <>
            <section>
                <Container> 
                    <div className=''>
                        <div className='flex items-center gap-15 bg-[#F4F5F5] p-20 '>
                            <div>
                                <h6 className='text-[18px] leading-8 font-poppins font-medium text-[#282938]'>About Us</h6>
                                <h3 className='font-semibold text-[38px] font-poppins leading-[54px] text-[#282938] '>Goal focussed</h3>
                                <p className='gblsw w-[515px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-[38px] font-poppins leading-[54px] text-[#282938] '>Continuous improvement</h3>
                                <p className='gblsw w-[515px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div>
                            <img src={whoBg} alt="" />
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default WhoWe