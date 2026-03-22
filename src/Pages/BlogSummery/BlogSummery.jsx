import Container from "../../components/Common/Container";
import blogimg from "../../assets/portfolio/woek1.png";
const BlogSummery = () => {
  return (
    <>
      <section className="py-28">
        <Container>
          <div>
            <div>
              <span className="gbl-fh">Web design and development</span>
              <h1 className="gbl-blog w-[646px] p-[12px_0_16px_0] ">
                Finsweet Design case studies
              </h1>
              <p className="gblf w-[817px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <img
                className="w-[1063px] py-12"
                src={blogimg}
                alt="blog image"
              />
            </div>
            <div className="flex items-center gap-[150px] border-b-2 border-[#dfd4d4] pb-7.5">
              <div className="">
                <span className="gblf">Client</span>
                <p className="gbl-fh">facebook.com</p>
              </div>

              <div>
                <span className="gblf">Service</span>
                <p className="gbl-fh">Product Design</p>
              </div>

              <div>
                <span className="gblf">Deliveable</span>
                <p className="gbl-fh">UI Screens, UX Flow & Prototype</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogSummery;
