import Container from '../../components/Common/Container'
// ! img import 
import pointerOne from '../../assets/work/pointer1.png';
import pointerTwo from '../../assets/work/pointer2.png';
import pointerThree from '../../assets/work/pointer3.png';
import pointerFour from '../../assets/work/pointer4.png';

const Work = () => {
    const images = [
        {
            heading: 'Stragy',
            image: pointerOne,
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            heading: 'Wireframing',
            image: pointerTwo,
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            heading: 'Design',
            image: pointerThree,
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            heading: 'Development',
            image: pointerFour,
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
    ]
    return (
        <section className='bg-[#F4F6FC] py-32 '>
            <Container>
                <div className="flex gap-[142px]">
                    <div className='w-[405px] '>
                        <h2 className='text-[48px] font-poppins leading-16 text-[#282938] font-semibold '>How We Work</h2>
                        <p className='gblsw py-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href="#" className='flex items-center gap-4 gblsb'>View Pricing
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                    <path d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727568 18.9896 -0.0727568 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 5.52344V6.27344H24V5.52344V4.77344H0V5.52344Z" fill="#F4F6FC" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className='w-[656px] grid grid-cols-2 gap-y-12 '>
                        {
                            images.map(img => (
                                <div className='work w-[328px] py-[15px] px-[15px] hover:shadow-xl duration-300 hover:px-[15px] hover:py-[15px] hover:rounded-md'>
                                    <img src={img.image} className='' alt="" />
                                    <h3 className='pt-4 pb-2' >{img.heading}</h3>
                                    <p className="gblsw w-[303px]">{img.paragraph}</p>
                                </div>
                            ))
                        } 

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Work