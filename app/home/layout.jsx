import { RiRobot2Line } from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
// import { AiFillAlert } from "react-icons/ai";
import { AiOutlineAlert } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div className="h-full flex flex-col gap-y-2">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-primary"></div>
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bolds">Daniel aman</h2>
            <h2 className="text-xs text-black/65">📍Addis ababa, jemo</h2>
          </div>
        </div>
        <div>
          <IoMdNotificationsOutline size={24} className="cursor-pointer" />
        </div>
      </div>
      <div className="min-w-full min-h-[85%] overflow-y-scroll py-2 no-scrollbar">
        {children}
      </div>
      <RiRobot2Line
        className="h-12 w-12 rounded-xl p-2 bg-primary fixed right-3 top-[80%]"
        color="white"
      />
      <div className="max-h-[5%] flex justify-around bg-white items-center gap-2 w-full ">
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] bg-primary">
          <Link href={"/home"}>
            <RiHomeLine size={24} className="text-white" />
          </Link>
        </div>
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] ">
          <Link href={"/home/appointments"}>
            <SlCalender size={24} />
          </Link>
        </div>
        <div className="flex items-center justify-center w-14 h-14 mb-8 border rounded-full bg-red-400">
          <Link href={"/home/appointments"}>
            <AiOutlineAlert size={24} className="text-white" />
          </Link>
        </div>
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] ">
          <Link href={"/communitychat"}>
            <IoChatbubblesOutline size={24} />
          </Link>
        </div>
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] ">
          <Link href={"/profile"}>
            <CgProfile size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
