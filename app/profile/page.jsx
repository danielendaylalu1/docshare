import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { IoMdSend } from "react-icons/io";
import Image from "next/image";

import user1 from "../../assets/user1.jpeg";

const page = () => {
  return (
    <div className="h-full flex flex-col gap-y-2">
      <div className="w-full flex justify-between items-center ">
        <Link href="/home">
          <IoIosArrowBack size={22} className="text-black cursor-pointer" />
        </Link>
        <h1 className=" text-primary text-sm ml-1 w-[90%] text-center">
          Profile
        </h1>
      </div>
      <div className="flex flex-col gap-y-6 overflow-y-scroll no-scrollbar">
        <div className="flex flex-col gap-y-10 items-center bg-primary/15 p-4 rounded-xl ">
          <div className="flex flex-col gap-y-2 items-center">
            <div className="flex w-32 h-32 bg-primary items-center justify-center rounded-full overflow-hidden">
              <Image src={user1} alt="user" />
            </div>
            <h1 className="text-xl font-bold text-black/70 ">Naol daniel</h1>
          </div>
          <div className="flex justify-around w-full">
            <div className="flex flex-col gap-y-1">
              <p className="text-black/35 text-sm">Weight</p>
              <p className="text-black">176KG</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-black/35 text-sm">Hieght</p>
              <p className="text-black">1.80m</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 items-center bg-primary/15 p-4 rounded-xl ">
          <div className="flex flex-col gap-y-2 items-center">
            <h1 className="text-xl text-primary ">
              Take your medicine time is now
            </h1>
            <h1 className="text-lg text-black/50 ">
              Time 6:00 am 1pill amoxaciline
            </h1>
          </div>
          <div className="flex justify-around w-full">
            <div className="flex flex-col gap-y-1 px-6 py-2 bg-green-400 rounded-xl">
              <FaCheck size={28} className="text-green-900" />
            </div>
            <div className="flex flex-col gap-y-1 px-6 py-2 bg-red-400 rounded-xl">
              <IoMdClose size={28} className="text-red-900" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-10 items-center bg-primary/15 p-4 rounded-xl ">
          <div className="flex flex-col gap-y-2 items-center">
            <h1 className="text-xl text-primary ">Daily health tips</h1>
            <h1 className="text-base text-black/50 text-center">
              Maintain a Healthy Diet:
            </h1>
            <h1 className="text-sm text-black/70 text-center">
              - Focus on foods with a low glycemic index, such as whole grains,
              vegetables, fruits, and lean proteins. - Limit your intake of
              sugary, high-carbohydrate foods and drinks. - Eat regular,
              balanced meals to help manage your blood sugar levels. - Consult a
              registered dietitian to develop a personalized meal plan.
            </h1>
            <div className="w-full relative mt-3">
              <h1 className="text-sm text-black/70 m-1">
                What Healthy tips do you want
              </h1>
              <input
                type={"text"}
                placeholder={"write something"}
                className="w-full px-3 py-2 rounded-xl outline-none border-black/25 border-[1px]"
              />
              <IoMdSend
                size={24}
                className="text-primary  absolute right-2 top-1/2"
              />
            </div>
          </div>
          {/* send as what you want */}
        </div>
      </div>
    </div>
  );
};

export default page;
