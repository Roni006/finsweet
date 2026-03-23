import Container from "../../components/Common/Container";
import blog from "../../assets/images/blog.png";

const BlogHeading = () => {
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogHeading;
