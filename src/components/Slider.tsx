"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Special sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.pinimg.com/564x/82/e1/1e/82e11e7b4f02239852c326cf08544a28.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-yellow-0",
  },
  {
    id: 2,
    title: "Summer sale Collections",
    description: "Sale! Up to 40% off!",
    img: "https://i.pinimg.com/736x/e6/5e/c6/e65ec603acf975cbd83e60880fab3ab4.jpg",

    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-yellow-60",
  },
  {
    id: 3,
    title: "Winter sale Collections",
    description: "Sale! Up to 40% off!",
    img: "https://i.pinimg.com/236x/6f/40/5b/6f405be701eb331abefe05824680922f.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-sblue to-eblue",
  },
];
const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row `}
            key={slide.id}
          >
            {/* textcontainer */}
            <div className=" h-1/2 xl:w-1/2 xl:h-full flex flex-col justify-center items-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* imagecontainer */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover "
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-125" : ""
            }`}
            onClick={() => setCurrent(index)}
            key={index}
          >
            {current === index && (
              <div className="w-[5px] h-[5px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
