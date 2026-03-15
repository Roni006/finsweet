import React from "react";
import Container from "../components/Common/Container";
import circle from "../assets/process/process-circle.png";
import line from "../assets/process/process-line.png";

const Process = () => {
  const details = [
    {
      circle: circle,
      line: line,
      title: "Planing",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      circle: circle,
      line: line,
      title: "Conception",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      circle: circle,
      line: line,
      title: "Design",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      circle: circle,
      line: line,
      title: "Development",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
  ];

  return (
    <>
      <section className="py-32">
        <Container>
          <div>
            <div className="flex flex-col items-center">
              <span class=" whowe-title">The Process We Follow</span>
            </div>
            <div className="grid grid-cols-4 items-center mt-12.5">
              {details.map((card, index) => (
                <div className="items w-[272px]">
                  <div className="icon flex items-center gap-6">
                    <img src={card.circle} alt="circle image" />
                    <img src={card.line} alt="line imager" />
                  </div>
                  <h6 className="gbl-fh pt-8 pb-2">{card.title}</h6>
                  <p className="gblsw">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Process;
