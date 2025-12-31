import React from 'react'
import Container from '../../components/Common/Container'
import line from "../../assets/about-bg/Line.png";
const Process = () => {
    return (
        <>
            <section className='py-[128px] '>
                <Container>
                    <div className='mainDiv' >
                        <h1 className='text-[48px] leading-16 font-semibold font-inter text-[#18191F] mb-12 text-center'>The process we follow</h1>
                        <div  className='flex items-center gap-8'>

                            <div>
                                <div>
                                    <div className='flex items-center gap-6'>
                                        <div className='cirle w-6 h-6 bg-[#2405F2] rounded-full '></div>
                                        <div className="dots">
                                            <img src={line} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='gbl-fh pt-8 pb-2'>Planing</h4>
                                    <p className='gblsw w-[272px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className='flex items-center gap-6'>
                                        <div className='cirle w-6 h-6 bg-[#2405F2] rounded-full '></div>
                                        <div className="dots">
                                            <img src={line} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='gbl-fh pt-8 pb-2'>Planing</h4>
                                    <p className='gblsw w-[272px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className='flex items-center gap-6'>
                                        <div className='cirle w-6 h-6 bg-[#2405F2] rounded-full '></div>
                                        <div className="dots">
                                            <img src={line} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='gbl-fh pt-8 pb-2'>Planing</h4>
                                    <p className='gblsw w-[272px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                </div>
                            </div>
                            
                            <div>
                                <div>
                                    <div className='flex items-center gap-6'>
                                        <div className='cirle w-6 h-6 bg-[#2405F2] rounded-full '></div>
                                        <div className="dots">
                                            <img src={line} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='gbl-fh pt-8 pb-2'>Planing</h4>
                                    <p className='gblsw w-[272px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Process