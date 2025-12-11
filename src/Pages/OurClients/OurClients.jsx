import Container from '../../components/Common/Container'

import client from '../../assets/images/clients.png'
const OurClients = () => {
  return (
    <section className='bg-[#F4F6FC] pt-32 pb-[130px] '>
        <Container>
            <div className='flex gap-[110px] '>
                <div className='w-[340px]'>
                    <h2 className='text-[38px] font-poppins leading-14 text-[#282938] font-semibold mb-4 '>What Our Clients Say About Us</h2>
                    <p className='gblsw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className='w-[845px] '>
                    <h3 className='text-[32px] leading-12 text-[#282938] font-poppins font-medium '>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>

                    <div className='flex gap-3.5 items-center mt-12'>
                        <img className='w-[52px] h-[52px] rounded-full' src={client} alt="client image" />
                        <div>
                            <h4 className='text-[18px] leading-8 font-poppins font-medium text-[#282938]'>Jenny Wilson</h4>
                            <p className='text-[12px] leading-7 font-poppins text-[#282938] font-medium'>Vice President</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default OurClients