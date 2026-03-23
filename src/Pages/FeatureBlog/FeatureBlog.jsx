import React from "react";
import Container from "../../components/Common/Container";
import blog from "../../assets/images/blog.png";

const FeatureBlog = () => {
  return (
    <>
      <section className="py-28 ">
        <Container>
          <div>
            <h1 className="gblh text-center w-[949px] mx-auto pb-4">
              A UX Case Study on Creating a Studious Environment for Students
            </h1>
            <div className="text-center!">
              <span className="gblf">
                Andrew Jonson Posted on 27th January 2021
              </span>
            </div>
            <img className="mt-8 rounded-md" src={blog} alt="blog image" />
            <p className="gblsw w-[831px] mx-auto text-center pt-10 pb-4">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside.
            </p>
            <div className="text-center ">
              <a href="#" className="readmore inline-block">
                Read More
              </a>
            </div>  
          </div>
        </Container>
      </section>
    </>
  );
};

export default FeatureBlog;
