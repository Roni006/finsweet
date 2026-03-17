import Container from "../../components/Common/Container";
import rivisions from "../../assets/images/freerevision.png";
const Rivisions = () => {
  return (
    <>
      <section className="py-32 bg-[#f4f6fc]">
        <Container>
          <div className="flex flex-row-reverse items-center justify-between gap-20">
            <div className="w-[635px]">
              <h6 className="top-span pb-4">Free Revision Rounds </h6>
              <span className="whowe-title w-[50px] ">
                Get free Revisions and one week of free maintenance
              </span>
              <p className="gblsw pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="w-[575px]">
              <img
                src={rivisions}
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

export default Rivisions;
