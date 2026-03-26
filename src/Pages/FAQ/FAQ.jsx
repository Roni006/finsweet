import { useState } from "react";
import Container from "../../components/Common/Container";
const FAQ = () => {
  const [bgAccording, setBgAccording] = useState(null);
  const accordingData = [
    {
      id: "01",
      title: "How much time does it take?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "02",
      title: "What is your class naming convention?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      id: "03",
      title: "How do you communicate?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      id: "04",
      title: "I have a bigger project. Can you handle it?.",
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      id: "05",
      title: "What is your class naming convention?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const handleBgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <>
      <section className="py-28">
        <Container>
          <div className="flex gap-[100px]">
            {/* accordion text  */}
            <div className="max-w-[328px] ">
              <h1 className="whowe-title pb-4 w-[328px] ">
                Frequently Asked Questions
              </h1>
              <p className="gblsb">Contact us for more info</p>
            </div>

            {/* accordion items  */}
            <div className="max-w-[846px] ">
              <div className="flex gap-3 flex-col w-full">
                {accordingData?.map((according, index) => (
                  <article key={index}>
                    <div
                      className={`${bgAccording === index ? "rounded-t-sm" : "rounded"} flex gap-2 cursor-pointer items-center justify-between bg-white w-full p-3 border-b border-[#cbc9c9a4]`}
                      onClick={() => handleBgAccording(index)}
                    >
                      <div className="flex items-center gap-15">
                        <span className="keyword">{according.id}</span>
                        <h2 className={`gbl-fh`}>{according.title}</h2>
                      </div>
                      <svg
                        className="dark:fill-[#282938] fill-[#ffffff] shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${
                            bgAccording === index && "rotate-180!"
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            bgAccording === index && "rotate-180!"
                          }`}
                        />
                      </svg>
                    </div>
                    <div
                      className={`grid transition-all duration-300  overflow-hidden ease-in-out  ${
                        bgAccording === index
                          ? "grid-rows-[1fr] opacity-100 px-3 py-3"
                          : "grid-rows-[0fr] opacity-0 px-3"
                      }`}
                    >
                      <div className="gblf overflow-hidden pl-[85px] max-w-[624px]">
                        <p>{according.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
