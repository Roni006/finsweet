import React from "react";
import Container from "../../components/Common/Container";
import { IoIosArrowRoundForward } from "react-icons/io";

// !import imagees
import blog1 from "../../assets/ourblog/blog1.png";
import blog2 from "../../assets/ourblog/blog2.png";
import blog3 from "../../assets/ourblog/blog3.png";
import blog4 from "../../assets/ourblog/blog4.png";
import blog5 from "../../assets/ourblog/blog5.png";
import blog6 from "../../assets/ourblog/blog6.png";

const OurBlog = () => {
  const ourblog = [
    //! item 1
    {
      blogimg: blog1,
      time: "21 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    //! item 2
    {
      blogimg: blog2,
      time: "21 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    //! item 3
    {
      blogimg: blog3,
      time: "21 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    //! item 4
    {
      blogimg: blog4,
      time: "21 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    //! item 5
    {
      blogimg: blog5,
      time: "21 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
    //! item 6
    {
      blogimg: blog6,
      time: "21 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      details:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    },
  ];

  return (
    <>
      <section className="py-28">
        <Container>
          <div>
            <h1 className="gbl-blog text-center">Our Blog</h1>
            <div className="grid grid-cols-3 items-center gap-7.5 mt-10">
              {ourblog.map((blog, i) => (
                <div>
                  <div className="rotate">
                    <img className="rounded-[10px_10px_0_0]" src={blog.blogimg} alt="blog image" />
                    <span className="gblf pt-8 pb-4">{blog.time}</span>
                    <h2 className="gbl-fh w-[404px] ">{blog.title}</h2>
                    <p className="gblsw pt-4 pb-6 w-[404px] ">{blog.details}</p>
                    <div className="flex items-center gap-2 " id="rotate">
                      <a href="#" className="link gblf font-bold inline-block">
                        Read More
                      </a>
                      <span className="icon text-[30px] cursor-pointer ">
                        <IoIosArrowRoundForward />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurBlog;
