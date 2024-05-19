import { RiRobot2Line } from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiFillAlert } from "react-icons/ai";
<AiFillAlert />;

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="pb-[3.3em]">{children}</div>
      <RiRobot2Line
        className="h-10 w-10 rounded-xl p-2 bg-primary fixed right-3 bottom-[3.3em]"
        color="white"
      />
      <div className="flex justify-around h-[2.5em] bg-white items-center gap-2 fixed bottom-0 left-0 w-full ">
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] bg-primary">
          <RiHomeLine size={20} className="text-white" />
        </div>
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] ">
          <SlCalender size={20} />
        </div>
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] ">
          <AiFillAlert size={28} className="text-red-500" />
        </div>
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] ">
          <IoChatbubblesOutline size={20} />
        </div>
        <div className="flex items-center justify-center py-1 px-4 rounded-xl min-w-[60px] ">
          <CgProfile size={20} />
        </div>
      </div>
    </div>
  );
}
