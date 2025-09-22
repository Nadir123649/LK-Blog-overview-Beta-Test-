"use client";

import React from "react";
import Image from "next/image";
import Bannerbg from "./../../public/banner-bg.png";
import { Star } from "@/utils";

const Banner = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center min-h-[493px]"
      style={{ backgroundImage: `url(${Bannerbg.src})` }}
    >
      <div className="container mx-auto px-4 min-h-[493px] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-[20px]">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="max-w-[96px] h-[37px] flex items-center justify-center gap-1 rounded-[28px] mb-[22px] border border-[#5a5c69] bg-[#313344] shadow-[inset_0_-1px_6px_rgba(255,255,255,0.5)]">
              <Image
                src={Star}
                alt="Featured star"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              <span className="text-white font-normal text-base leading-none font-dmsans">
                Blogs
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-[457px] font-figtree text-[50px] font-semibold leading-[130%] text-white">
              Blog zur Web & App-Entwicklung
            </h1>
          </div>

          {/* Right content */}
          <div>
            <h3 className="text-[#F1F1F1] font-normal font-dmsans text-lg leading-[29px] max-w-[553px] pl-[20px]">
              Hier findest du unsere Beiträge zu verschiedenen Themen wie Apps,
              Drupal Websites und technischen Web-Frameworks.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
