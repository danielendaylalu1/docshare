import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

import telebirr from "../../assets/telebirr.png";

import chapa from "../../assets/chapa.jpeg";

import cbe from "../../assets/cbe.jpeg";

import abbysinia from "../../assets/abbysinia.png";

const page = () => {
  return (
    <div className="h-full flex flex-col gap-y-6">
      <div className="w-full flex justify-between items-center pt-3">
        <Link href="/home">
          <IoIosArrowBack size={22} className="text-black cursor-pointer" />
        </Link>
        <h1 className=" text-primary text-sm ml-1 w-[90%] text-center">
          Procced Paymnet
        </h1>
      </div>
      <div className="h-full flex flex-col items-center gap-y-8">
        <div className="flex cursor-pointer items-center gap-x-4 w-[80%] bg-primary/50 rounded-xl px-4 py-1">
          <div className="border border-slate-300 rounded-full w-14 h-14 overflow-hidden">
            <Image src={telebirr} alt="telebirr" className="w-full" />
          </div>
          <h2 className="text-sm text-black">Procced with telebirr</h2>
        </div>
        <div className="flex cursor-pointer items-center gap-x-4 w-[80%] bg-primary/50 rounded-xl px-4 py-1">
          <div className="border border-slate-300 rounded-full w-14 h-14 overflow-hidden">
            <Image src={chapa} alt="telebirr" className="w-full" />
          </div>
          <h2 className="text-sm text-black">Procced with telebirr</h2>
        </div>
        <div className="flex cursor-pointer items-center gap-x-4 w-[80%] bg-primary/50 rounded-xl px-4 py-1">
          <div className="border border-slate-300 rounded-full w-14 h-14 overflow-hidden">
            <Image src={cbe} alt="telebirr" className="w-full" />
          </div>
          <h2 className="text-sm text-black">Procced with telebirr</h2>
        </div>
        <div className="flex cursor-pointer items-center gap-x-4 w-[80%] bg-primary/50 rounded-xl px-4 py-1">
          <div className="border border-slate-300 rounded-full w-14 h-14 overflow-hidden">
            <Image src={abbysinia} alt="telebirr" className="w-full" />
          </div>
          <h2 className="text-sm text-black">Procced with telebirr</h2>
        </div>
      </div>
      <Link href={"/home"} className="w-[80%] self-center">
        <div className="flex cursor-pointer justify-center items-center gap-x-4 w-[100%] bg-primary/50 rounded-xl px-4 py-4">
          <h2 className="text-sm text-black">Go back home</h2>
        </div>
      </Link>
    </div>
  );
};

export default page;
