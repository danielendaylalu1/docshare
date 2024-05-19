import GroupCard from "@/components/GroupCard";
import React from "react";

import doc from "../../assets/doc1.png";
import DoctorCard from "@/components/DoctorCard";
import Link from "next/link";
// import Fakesearchbar from "@/components/fakesearchbar";

const page = () => {
  return (
    <main className="h-full flex flex-col gap-y-8">
      <Link href="home/doctorlist" className="w-full">
        <input
          type={"text"}
          placeholder={"search"}
          className="px-3 py-2 rounded-xl outline-none border-black/25 border-[1px] w-full"
        />
      </Link>

      <div className="p-6 w-full bg-primary rounded-xl flex flex-col gap-y-4">
        <h2 className="text-white font-medium text-base">
          Near Medical Centers
        </h2>
        <p className="text-white/90 text-xs">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying
        </p>
      </div>
      <div className="flex flex-col gap-y-3 w-full">
        <h2 className="text-black/55 font-medium text-sm">Community Groups</h2>
        <div className="no-scrollbar flex w-full gap-x-4 overflow-x-scroll">
          <Link href={"/communitychat"}>
            <GroupCard docnum={25} title={"Cancer "} />
          </Link>
          <Link href={"/communitychat"}>
            <GroupCard docnum={41} title={"HIV "} />
          </Link>
          <Link href={"/communitychat"}>
            <GroupCard docnum={17} title={"Diabest"} />
          </Link>
          <Link href={"/communitychat"}>
            <GroupCard docnum={75} title={"Hyper tension"} />
          </Link>
          <Link href={"/communitychat"}>
            {" "}
            <GroupCard docnum={37} title={"Mental health"} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 w-full pb-4">
        <h2 className="text-black/55 font-medium text-sm">Medical doctors</h2>
        <div className="no-scrollbar flex w-full gap-x-4 overflow-x-scroll">
          <div className="min-w-[70%]">
            <Link href={"/booking"}>
              <DoctorCard
                img={doc}
                name={"Eyob naol"}
                exp={"6"}
                desc={"In publishing and graphic design, Lorem ipsum is a"}
                rate={"⭐⭐⭐⭐⭐"}
              />
            </Link>
          </div>
          <div className="min-w-[70%]">
            <Link href={"/booking"}>
              <DoctorCard
                img={doc}
                name={"Eyob naol"}
                exp={"6"}
                desc={"In publishing and graphic design, Lorem ipsum is a"}
                rate={"⭐⭐⭐⭐⭐"}
              />
            </Link>
          </div>
          <div className="min-w-[70%]">
            <Link href={"/booking"}>
              <DoctorCard
                img={doc}
                name={"Eyob naol"}
                exp={"6"}
                desc={"In publishing and graphic design, Lorem ipsum is a"}
                rate={"⭐⭐⭐⭐⭐"}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
