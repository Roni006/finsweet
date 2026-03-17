import Container from "../../components/Common/Container";
import support from "../../assets/images/support.png";
const Support = () => {
  return (
    <>
      <section className="py-32">
        <Container>
          <div className="flex items-center justify-between gap-20">
            <div className="w-[635px]">
              <h6 className="top-span pb-4">24/7 Support </h6>
              <span className="whowe-title w-[50px] ">
                Working with us, you will be getting 24/7 priority support{" "}
              </span>
              <p className="gblsw pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="w-[575px]">
              <img
                src={support}
                className="rounded-md"
                alt="Best class background image"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
