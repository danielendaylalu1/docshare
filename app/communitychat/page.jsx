import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import GroupCard from "@/components/GroupCard";

import { IoMdSend } from "react-icons/io";
import ChatCard from "@/components/ChatCard";

import Link from "next/link";
// import SpeechToText from "@/components/STT";

const page = () => {
  return (
    <div className="h-full flex flex-col gap-y-6">
      <div className="w-full flex justify-between items-center pt-3">
        <Link href="/home">
          <IoIosArrowBack size={22} className="text-black cursor-pointer" />
        </Link>
        <h1 className=" text-primary text-sm ml-1 w-[90%] text-center">
          Community Chat
        </h1>
      </div>
      <div className="no-scrollbar flex w-full min-h-[60px] gap-x-4 overflow-x-scroll">
        <GroupCard
          docnum={25}
          title={"Cancer "}
          showUserList={false}
          clr={"bg-[#e6e6fa]"}
        />
        <GroupCard
          docnum={41}
          title={"HIV "}
          showUserList={false}
          clr={"bg-red-400"}
        />
        <GroupCard
          docnum={17}
          title={"Diabest"}
          showUserList={false}
          clr={"bg-blue-400"}
        />
        <GroupCard
          docnum={75}
          title={"Hyper tension"}
          showUserList={false}
          clr={"bg-[#ef5c3e]"}
        />
        <GroupCard docnum={37} title={"Mental health"} showUserList={false} />
      </div>
      <div className="border-t border-black/35 flex flex-col gap-y-2 justify-between px-4 relative overflow-y-scroll no-scrollbar">
        <h2 className="py-2 text-xs text-center sticky top-0 bg-white flex-1">
          Diabetes chat room
        </h2>
        <div className="flex flex-col w-full gap-y-4">
          <ChatCard
            name={"Anonums"}
            message={
              "Dear friends,!Is there any possible way of curing from Diabetics?"
            }
            justify={""}
            clr={"bg-red-400"}
          />
          <ChatCard
            name={"Anonums"}
            message={
              "There is no cure for diabetes yet, the alternative is to take insulin.I'm sure that there are good prospects in the future."
            }
            justify={""}
            clr={"bg-blue-400"}
          />
          <ChatCard
            name={"Anonums"}
            message={
              "Please suggest fruits and vegetables and daily routine for pre-diabetes person its urgently required plz"
            }
            justify={""}
            clr={"bg-black"}
          />
          <ChatCard
            name={"abebe"}
            message={
              "Best fruit for Pre diabetes Strawberries, Apple, bananas, Grapefruit, Raspberries and Peaches Fruit may be high in shugar, but most kinds have so many beneficial nutrients and properties that they can be a healthy part of a diet to prevent diabetes. Best vegetables for pre diabetes: Leafy greens, spinach, peppers, asparagus, cauliflower... honestly, any non-starchy vegetable is a great go to for those with pre diabetes, as they are ful of antioxidants, vitamins and minerals. For your last question about daily routine.... eat healthy foods. A diet high in fruit, vegetables, nuts, whole grains and olive oil is associated with a lower risl of pre diabetes. Exercise regularly, lose weight, stop smoking, and drink water."
            }
            justify={"justify-end"}
            clr={"bg-green-400"}
          />
          <ChatCard
            name={"chala"}
            message={"Thank you!!"}
            justify={""}
            clr={"bg-black"}
          />
        </div>
        <div className="w-full sticky bottom-0">
          <input
            type={"text"}
            placeholder={"write something"}
            className="w-full px-3 py-2 rounded-xl outline-none border-black/25 border-[1px]"
          />
          <IoMdSend
            size={24}
            className="text-primary  absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      {/* <SpeechToText /> */}
    </div>
  );
};

export default page;
