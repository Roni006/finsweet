import Container from '../../components/Common/Container'
import aboutBg from "../../assets/about-bg/aboutBg.png"
const AboutUs = () => {
  return (
    <>
    <section className='py-[128px]'>
        <Container>
            <div className='flex items-center gap-[138px]'>
                <div className='w-[595px]'>
                    <h6 className='text-[18px] leading-8 font-poppins font-medium text-[#282938]'>About Us</h6>
                    <h2 className=' text-[54px] leading-[72px] font-poppins font-semibold text-[#282938] mb-[20px] '>Our Designs solve problems</h2>
                    <p className='gblsw w-[484px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div>
                    <img src={aboutBg} alt="" />
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default AboutUs