import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <aside className="flex">
        <div className="w-full md:w-1/2  z-10  text-white">
          <div className="pl-5 md:pl-32 capitalize ">
            <p className="pt-10 md:pt-20  font-extralight "> tentang saya</p>
            <div className="text-2xl md:text-5xl pt-10 font-extrabold">
              <h1>AHMAD</h1>
              <h1 className="md:pt-2 pt-14 pl-14 md:pl-0 ">PANDU SUBEKTI</h1>
            </div>
            <h1 className="md:pt-14 txet-base md:text-xl pt-32   md:font-bold">
              saya adalah full-stack web devoloper
            </h1>

            <p className="pt-5 font-extralight text-xs md:text-base md:font-normal pr-10 text-justify md:text-left md:pr-1 ">
              Selamat datang di web pribadi saya yang sederhana dan penuh
              coretan ini. Selamat berkenalan dengan saya melalui media sosial,
              tak kenal maka tak sayang. Semoga perkenalan singkat ini menjadi
              lebih seru....
            </p>
          </div>
        </div>
        <div className="absolute md:relative z-0 w-full md:w-1/2 flex justify-end pt-20 pr-10">
          <Image src="/shiba.png" width={1000} height={1000} />
        </div>
      </aside>
      <footer>
        <div className="flex justify-center pt-20">
          <div className="rounded-full bg-indigo-500 w-8 h-8 mx-3 -mt-2 border-2 border-solid border-white"></div>
          <div className="rounded-full bg-white w-5 h-5 mx-3"></div>
          <div className="rounded-full bg-white w-5 h-5 mx-3"></div>
          <div className="rounded-full bg-white w-5 h-5 mx-3"></div>
        </div>
      </footer>
    </div>
  );
}
