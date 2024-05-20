import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-6 items-center bg-primary/15 p-4 rounded-xl ">
        <div className="flex flex-col gap-y-2 items-center">
          <h1 className="text-xl text-primary ">
            Take your medicine time is now
          </h1>
          <h1 className="text-base text-black/50 ">
            Time 6:00 am 1pill amoxaciline
          </h1>
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col gap-y-1 px-4 py-2 bg-green-400 rounded-xl">
            <FaCheck size={24} className="text-green-900" />
          </div>
          <div className="flex flex-col gap-y-1 px-4 py-2 bg-red-400 rounded-xl">
            <IoMdClose size={24} className="text-red-900" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 items-center bg-primary/15 p-4 rounded-xl ">
        <div className="flex flex-col gap-y-2 items-center">
          <h1 className="text-xl text-primary ">Upcomming appointment</h1>
          <h1 className="text-base text-black/50 ">
            Time 6:00 with doctor Daniel naol.
          </h1>
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col text-xs gap-y-1 px-4 py-2 bg-green-400 rounded-xl text-center">
            join appointment
          </div>
          <div className="flex flex-col text-xs gap-y-1 px-4 py-2 bg-red-400 rounded-xl text-center">
            Cancel appointment
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 items-center bg-primary/15 p-4 rounded-xl ">
        <div className="flex flex-col gap-y-2 items-center">
          <h1 className="text-xl text-primary ">Diabetes chat room</h1>
          <h1 className="text-base text-black/50 ">
            <span className="text-black underline">@Anonomus</span> replyied to
            your text
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
