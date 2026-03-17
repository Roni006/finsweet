import React from "react";
import Container from "../../components/Common/Container";
//! brand image
import brand1 from "../../assets/brand/Logo 1.png";
import brand2 from "../../assets/brand/Logo 2.png";
import brand3 from "../../assets/brand/Logo 3.png";
import brand4 from "../../assets/brand/Logo 4.png";
import brand5 from "../../assets/brand/Logo 5.png";

const Logo = () => {
  const brandImage = [
    {
      brand: brand1,
    },
    {
      brand: brand2,
    },
    {
      brand: brand3,
    },
    {
      brand: brand4,
    },
    {
      brand: brand5,
    },
  ];
  return (
    <>
      <section>
        <Container>
          <div className="brand flex items-center gap-[90px] justify-around">
            <div className="mt-12">
              <h1 className="text-[38px] font-poppins leading-[54px] text-[#282938] font-semibold ">
                100.000+
              </h1>
              <p className="font-poppins font-normal text-[16px] leading-7 text-[#282938] ">
                Finsweet Users
              </p>
            </div>
            <div className="flex items-center gap-15 mt-[75px]">
              {brandImage.map((brands, i) => (
                <img src={brands.brand} alt="" />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Logo;
