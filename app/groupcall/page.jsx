import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaMicrophone, FaVideo } from "react-icons/fa";
import Link from "next/link";

import { CgProfile } from "react-icons/cg";
import Image from "next/image";

import doc3 from "../../assets/doc3.jpeg";

import user1 from "../../assets/user1.jpeg";
import user2 from "../../assets/user2.jpeg";

export default function page() {
  return (
    <div className="h-full relative flex flex-col justify-between">
      <div className="bg-black/30 relative w-full min-h-[50vh] rounded-2xl flex items-center justify-center">
        <div className="absolute p-2 rounded-xl bg-blue-300 top-3 left-3">
          <Link href={"/home"}>
            <IoIosArrowBack color="white" />
          </Link>
        </div>
        <div className="w-[60%] rounded-xl overflow-hidden">
          <Image src={doc3} alt="doctor" />
        </div>
      </div>
      <div className="bg-primary/20 flex justify-center items-center flex-col relative w-full h-[10vh] mt-4 rounded-2xl">
        <h1>Dentist</h1>
        <h1>Dr. Mahlet Kebed</h1>
      </div>
      <div className="no-scrollbar flex w-full gap-x-4 overflow-x-scroll">
        <Link
          href={"/communitychat"}
          className="min-w-[120px] rounded-xl p-4 bg-black/30 flex justify-center items-center"
        >
          <div className="rounded-full overflow-hidden">
            <Image src={user1} alt="user1" />
          </div>
        </Link>
        <Link
          href={"/communitychat"}
          className="min-w-[120px] rounded-xl p-4 bg-black/30 flex justify-center items-center"
        >
          <CgProfile size={36} />
        </Link>

        <Link
          href={"/communitycat"}
          className="min-w-[120px] rounded-xl p-4 bg-black/30 flex justify-center items-center"
        >
          <div className="rounded-full overflow-hidden">
            <Image src={user2} alt="user2" />
          </div>
        </Link>
        <Link
          href={"/communitychat"}
          className="min-w-[120px] rounded-xl p-4 bg-black/30 flex justify-center items-center"
        >
          <CgProfile size={36} />
        </Link>
        <Link
          href={"/communitychat"}
          className="min-w-[120px] rounded-xl p-4 bg-black/30 flex justify-center items-center"
        >
          <CgProfile size={36} />
        </Link>
      </div>

      <div className="left-0right-0 bottom-2 flex justify-between items-center gap-x-2 w-[100%] border-2 overflow-hidden">
        <div className="bg-blue-300 w-[30%] h-[3.5em] rounded-2xl flex justify-center items-center">
          <FaVideo size="25px" color="black" />
        </div>
        <div className="bg-red-400 w-[30%] h-[3.5em] rounded-2xl flex justify-center items-center">
          <IoCallSharp size="25px" color="white" />
        </div>
        <div className="bg-blue-300 w-[30%] h-[3.5em] rounded-2xl flex justify-center items-center">
          <FaMicrophone size="25px" color="black" />
        </div>
      </div>
    </div>
  );
}
