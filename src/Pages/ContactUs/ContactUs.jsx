import React from "react";
import Container from "../../components/Common/Container";

const ContactUs = () => {
  return (
    <>
      <section className="py-28">
        <Container>
          <div>
            <div>
              <h1 className="gblh text-center">Contact Us</h1>
              <p className="gblsw w-[562px] text-center mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="bg-[#F4F6FC] py-15 px-[70px] rounded-md mt-15">
              <form className="">
                <div className="grid grid-cols-2 items-center gap-7.5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="text" className="top-span">
                      Name
                    </label>
                    <input
                      className=" py-4 px-8 border border-[#e3e0e0] rounded-md outline-none "
                      type="text"
                      placeholder="Enter your name.."
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="top-span">
                      Email
                    </label>
                    <input
                      className="iuput py-4 px-8 border border-[#e3e0e0] rounded-md outline-none "
                      type="email"
                      placeholder="Enter your Email.."
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="text" className="top-span">
                      Subject
                    </label>
                    <input
                      className="iuput py-4 px-8 border border-[#e3e0e0] rounded-md outline-none "
                      type="text"
                      placeholder="Provide Context..."
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="text" className="top-span">
                      Subject
                    </label>
                    <select
                      name=""
                      id=""
                      className="iuput py-4 px-8 border border-[#e3e0e0] rounded-md outline-none cursor-pointer"
                    >
                      <option value="Select Subject">Select Subject</option>
                      <option className="top-span" value="design">
                        Web Design
                      </option>
                      <option className="top-span" value="development">
                        Web Development
                      </option>
                      <option className="top-span" value="graphics">
                        Graphics Design
                      </option>
                      <option className="top-span" value="marketing">
                        Digital Marketing
                      </option>
                      <option className="top-span" value="motion">
                        Motion Graphics
                      </option>
                    </select>
                    {/* <input
                      className="iuput py-4 px-8 border border-[#e3e0e0] rounded-md outline-none "
                      type="text"
                      placeholder="Select SUbject.."
                    /> */}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-4">
                  <label htmlFor="text" className="top-span">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="pt-4.5 pb-[92px] px-7.5 border border-[#e3e0e0] rounded-md outline-none resize-none"
                    placeholder="Write your question here..."
                  ></textarea>
                </div>
                <div>
                  <a
                    href="#"
                    className="contact-cta py-4 px-16 bg-[#282938] border-2 border-[#282938] mt-7.5 inline-block rounded-full hover:bg-transparent hover:text-[#282938]! duration-300 ease-in-out "
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
