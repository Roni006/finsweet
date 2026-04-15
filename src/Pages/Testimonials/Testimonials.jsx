import React from 'react'
import Container from '../../components/Common/Container'

import user from "../../assets/testi-img.png";

const Testimonials = () => {
  return (
    <>
      <section className="bg-[#f9fbfd] py-32 ">
        <Container>
          <div className="flex justify-between nter gap-[50px] ">
            {/* item 2 */}
            <div className="max-w-[327px]">
              <h1 className="text-[#282938] text-[36px] font-semibold font-poppins ">
                What our clients say about us
              </h1>
              <p className="text-[#282938] font-normal font-poppins text-[16px] leading-7 pt-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </div>
            {/* item 2 */}
            <div className="max-w-[780px] ">
              <h2 className="text-[#282938] font-medium text-[32px] font-poppins leading-12 mb-12 max-w-[750px] ">
                "The best agency we’ve worked with so far. They understand our
                product and are able to add new features with a great focus."
              </h2>
              <div className="flex items-center gap-3.5">
                <img src={user} alt="testimonial image" />
                <div>
                  <p className="text-[#282938] font-medium font-poppins leading-8 text-[18px]  ">
                    Jenny Wilson
                  </p>
                  <span className="text-[#282938] leading-8 text-[14px] font-medium font-poppins ">
                    vice president
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Testimonials