import React, { useEffect } from "react";
import { dataProject } from "../../contant/dataProject";
import { ArrowsAltOutlined } from "@ant-design/icons";
import "./flickity.css";

const Project = () => {
    useEffect(() => {
        var elem = document.querySelector(".carousel");
        var flkty = new Flickity(elem, {
            // options
            cellAlign: "left",
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            autoPlay: 2000,
            watchCSS: true,
        });
    }, []);
    return (
        <div id="project" className="py-40 text-center max-sm:pt-16">
            <div>
                <h2 className="text-8xl text-[#00ff85] mt-7 mb-7 font-bold tracking-wider max-sm:text-5xl max-sm:text-left">
                    My Project
                </h2>
            </div>
            <div
                className={`carousel grid gap-7 mt-[100px] text-left max-sm:mt-4`}
            >
                {dataProject?.toReversed()?.map((item, i) => {
                    const {
                        name,
                        dateComplete,
                        author,
                        description,
                        tagTechnologies,
                        link,
                        img,
                    } = item || {};
                    return (
                        <div
                            key={i}
                            className={`carousel-cell mr-7 rounded-lg border-4 border-[#334155] relative aspect-[16/9] w-[50%] overflow-hidden max-xl:aspect-[16/9]`}
                        >
                            <div className="w-[100%] h-[100%] px-5 relative flex flex-col justify-center bg-black/90 z-10 opacity-0 transition duration-1000 hover:opacity-100">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold max-sm:text-base">
                                        {name || ""}
                                    </h3>
                                    <a
                                        className="p-3 max-sm:p-0"
                                        href={link}
                                        target="_blank"
                                    >
                                        <ArrowsAltOutlined
                                            alt="View More"
                                            style={{
                                                fontSize: 16,
                                            }}
                                        />
                                    </a>
                                </div>
                                <p className="mb-1 text-xs">
                                    {dateComplete || ""}
                                </p>
                                <p className="text-[#00ff85] font-[600] tracking-[5px] uppercase">
                                    {author || ""}
                                </p>
                                <p className="my-[10px] mb-[10px] min-h-[72px] line-clamp-3 max-sm:text-xs max-sm:my-0">
                                    {description || ""}
                                </p>
                                <div className="flex items-center content-center gap-[10px] overflow-hidden">
                                    {tagTechnologies?.map((tag, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center text-nowrap px-4 h-10 bg-[#334155] rounded-lg max-sm:px-[10px] max-sm:text-xs max-sm:h-5"
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
        </div>
    );
};

export default Project;
