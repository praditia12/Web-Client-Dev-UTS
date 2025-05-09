import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="w-full min-h-[50vh] md:min-h-screen bg-[#C7D0D9] relative overflow-hidden">
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                <div
                    className={`bg-black text-white py-4 md:py-6 rounded-l-full flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer ${
                        isHovered ? "px-6 md:px-10" : "px-6"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src="/assets/hai_image.png" alt="Wave Icon" className="w-6 h-6 md:w-8 md:h-8" />
                    {isHovered && (
                        <span className="text-base md:text-[30px] whitespace-nowrap transition-opacity duration-300 opacity-100">
                            Hi I'm Adit
                        </span>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full text-center">
                <img
                    src="/assets/hero_image.png"
                    alt="profile"
                    className="rounded-lg w-64 md:w-[500px] object-cover mx-auto"
                />
            </div>

            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full z-10 text-center px-4">
                <marquee scrollamount="20" behavior="scroll" direction="left" className="w-full">
                    <div className="text-4xl md:text-6xl lg:text-[150px] text-white font-semibold whitespace-nowrap">
                        Webflow Developer - UI/UX Designer - Frontend Developer - Web Designer
                    </div>
                </marquee>
            </div>
        </section>
    );
};

export default Hero;
