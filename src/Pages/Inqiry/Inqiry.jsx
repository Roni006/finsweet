

import Container from '../../components/Common/Container'
import inbg from '../../assets/images/inqiry-bg.png'
const Inqiry = () => {
   
    return (
        <section className='pt-32 '>
            <Container>
                <div className='flex'>
                    <div className='w-[656px] relative '>
                        <img src={inbg} alt="" className='rounded-l-[20px]' />
                        <div className="absolute inset-0 bg-[rgba(28,30,83,0.5)] rounded-l-[20px]"></div>
                        <div className='w-[464px] absolute top-24 left-24'>
                            <h2 className='text-[54px] leading-[74px] font-poppins font-semibold text-[#ffffff]'>Building stellar websites for early startups</h2>
                            <p className='pt-6 gblin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </div>
                    <div className='w-[624px] bg-[#1C1E53] pt-[106px] pb-[38px] px-24 rounded-r-[20px]'>
                        <h3 className='gblin-f'>Send inquiry</h3>
                        <p className='gblin mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <form>
                            <input className='gblfin' type="text" placeholder='Enter Name' />
                            <input className='gblfin mt-4 mb-4' type="email" placeholder='Email' />
                            <input className='gblfin' type="url" placeholder='Paste your Figma Design URL' />
                            <button type='submit' className='text-[18px] leading-8 font-manrope font-semibold bg-[#FCD980] py-2.5 px-[100px] w-full rounded-[40px] inline-block border-1 border-[#FCD980] hover:bg-transparent hover:text-[#FCD980] transition .2s duration-500 cursor-pointer mt-[34px] mb-[34px]'>Send an Inquiry</button>
                            <div className='flex items-center justify-center '>
                                <a href="#" id='svg' className='flex items-center gap-4 gbls '>Get in touch with us
                                    <span className='text-blue-700'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
                                        <path d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727568 18.9896 -0.0727568 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 5.52344V6.27344H24V5.52344V4.77344H0V5.52344Z" fill="#F4F6FC" />
                                    </svg>
                                    </span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Inqiry