import Container from '../../components/Common/Container'
// ! image import
import iconOne from '../../assets/fearure/Icon1.png';
import iconTwo from '../../assets/fearure/Icon2.png';
import iconThree from '../../assets/fearure/Icon3.png';
import iconFour from '../../assets/fearure/Icon4.png';
import iconFive from '../../assets/fearure/Icon5.png';
import iconSix from '../../assets/fearure/Icon6.png';
const Feature = () => {
    const featureContent = [
        {
            icon: iconOne,
            heading: 'Uses Client First',
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: iconTwo,
            heading: 'Two Free Revision Round',
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: iconThree,
            heading: 'Template Customization',
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: iconFour,
            heading: '24/7 Support',
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: iconFive,
            heading: 'Quick Delivery',
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: iconSix,
            heading: 'Hands-on approach',
            paragraph: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
    ]
    return (
        <section className='py-32 bg-[#F4F6FC] '>
            <Container>
                <div className="top w-[630px] text-center mx-auto mb-[50px]">
                    <h4 className='gblf '>Features</h4>
                    <h2 className='gblh mt-2'>Design that solves problems, one product at a time</h2>
                </div>
                <div className='grid grid-cols-3 gap-4 gap-y-6 '>
                    {
                        featureContent.map(feature => (
                            <div className='w-[405px] bg-[#ffffff] py-10 px-12 rounded-sm shadow hover:shadow-xl duration-300'>
                                <img src={feature.icon} alt="" />
                                <h4 className='gbl-fh pt-[22px] pb-3'>{
                                    feature.heading}</h4>
                                <p className='gblsw w-[324px]'>{feature.paragraph}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default Feature