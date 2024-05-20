import React from "react";

const GroupCard = ({
  title,
  docnum = 12,
  showUserList = true,
  clr = "bg-primary/75",
}) => {
  return (
    <div
      className={`min-w-[120px] flex flex-col gap-y-2 justify-between items-start ${clr} text-white text-sm rounded-xl p-2`}
    >
      <div>{title}</div>
      <div className="text-white/60">{docnum} members</div>
      {showUserList && (
        <div className="flex justify-start  items-start">
          <div className="w-[30px] border-2 border-white h-[30px] rounded-full bg-primary"></div>
          <div className="w-[30px] border-2 border-white ml-[-10px] h-[30px] rounded-full bg-primary"></div>
          <div className="w-[30px] border-2 border-white ml-[-10px] h-[30px] rounded-full bg-primary"></div>
          <div className="w-[30px] border-2 border-white ml-[-10px] h-[30px] rounded-full bg-primary"></div>
        </div>
      )}
    </div>
  );
};

export default GroupCard;
