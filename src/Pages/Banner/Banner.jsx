import Container from '../../components/Common/Container' 
import banner from "../../assets/images/banner-bg.png"

const Banner = () => {
    return (
        <>
            <section className='bg-[#1C1E53] py-[126px] '>
                <Container>
                    <div className="maintContent flex items-center gap-15">
                        <div className='w-[582px]'>
                            <h1 className='text-[54px] leading-[74px] text-[#ffffff] font-poppins font-bold '>Building stellar websites for early startups</h1>
                            <p className='gbls w-[562px] pt-6 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <div className="button flex items-center gap-10">
                                <a href="#" className='btns'>View Our Works</a>
                                <a href="#" className='flex items-center gap-4 gbls'>View Pricing
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                        <path d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727568 18.9896 -0.0727568 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 5.52344V6.27344H24V5.52344V4.77344H0V5.52344Z" fill="#F4F6FC" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                        <div className='w-[638px]'>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner