import React, { useEffect } from "react";
import { dataProject } from "../../contant/dataProject";
import { ArrowsAltOutlined } from "@ant-design/icons";
import "./flickity.css";
import { message } from "antd";

const Project = () => {
  useEffect(() => {
    var elem = document.querySelector(".carousel");
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      // pageDots: false,
      prevNextButtons: false,
      watchCSS: true,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-offset="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      id="project"
      className="py-40 text-center max-sm:pt-16"
    >
      <div>
        <h2 className="text-8xl leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-[#03ff85] to-[#00e6da] mt-7 mb-7 font-bold tracking-wider max-sm:text-5xl max-sm:text-left">
          My Project
        </h2>
      </div>
      <div
        className={`carousel grid gap-14 my-[100px] text-left max-sm:mt-4 z-10`}
      >
        {dataProject?.toReversed()?.map((item, i) => {
          const {
            name,
            dateComplete,
            description,
            tagTechnologies,
            link,
            img,
          } = item || {};
          return (
            <div
              key={i}
              className={`carousel-cell mr-7 rounded-lg border-4 border-[#334155] relative aspect-[16/9] w-[50%] overflow-hidden max-[1440px]:w-[40%] max-[2560px]:w-[30%]`}
            >
              <div className="w-[100%] h-[100%] px-5 relative flex flex-col justify-center bg-black/90 z-10 opacity-0 transition duration-1000 hover:opacity-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold max-sm:text-base hover:text-[#00ff85] duration-300">
                    <a href={link} target="blank">
                      {" "}
                      {name || ""}
                    </a>
                  </h3>
                  <a className="p-3 max-sm:p-0" href={link} target="_blank">
                    {/* Live Demo */}
                    <ArrowsAltOutlined
                      alt="View More"
                      style={{
                        fontSize: 20,
                        color: "#03ff85",
                        border: "1px solid #03ff85",
                      }}
                    />
                  </a>
                </div>
                <p className="my-[10px] mb-[10px] min-h-[60px] line-clamp-3 max-sm:text-xs max-sm:my-0">
                  {description || ""}
                </p>
                <div className="tagList flex items-center content-center gap-[10px] overflow-hidden">
                  {tagTechnologies?.map((tag, i) => (
                    <div
                      key={i}
                      className="text-sm tag flex items-center text-nowrap px-3 h-10 bg-[#334155] rounded-lg max-sm:px-[10px] max-sm:text-xs max-sm:h-5"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={img}
                alt="img"
                className="w-[100%] h-[100%] object-top flex absolute top-0 left-0"
              />
            </div>
          );
        })}
      </div>
      <div>
        <a
          href="./assets/file/CV-BuiThienPhat.pdf"
          onClick={() => {
            message.success("Downloaded");
          }}
          download
          className="p-5 text-xl tracking-wide bg-[#03ff85] rounded-xl text-[black] relative z-10 hover:bg-[#00e6da] duration-300"
        >
          Download my CV
        </a>
      </div>
    </div>
  );
};

export default Project;
