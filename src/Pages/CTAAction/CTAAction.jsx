import React from "react";
import Container from "../../components/Common/Container";

const CTAAction = () => {
  return (
    <>
      <section className="py-28 bg-[#F4F6FC]">
        <Container>
          <div className="text-center">
            <h1 className="gbl-blog pt-2 pb-6 w-[730px] mx-auto">
              Let's build something great together
            </h1>
            <p className="gblf w-[562px] text-center mx-auto">
              Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
              ultricies nec dolor sit amet, scelerisque cursus purus.
            </p>
            <a href="#" className="btns text-black! inline-block mt-10 ">
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CTAAction;
