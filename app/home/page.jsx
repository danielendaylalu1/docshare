import GroupCard from "@/components/GroupCard";
import React from "react";

import doc1 from "../../assets/doc1.jpeg";
import doc2 from "../../assets/doc2.jpeg";
import doc3 from "../../assets/doc3.jpeg";
// import doc4 from "../../assets/doc4.jpeg";
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

      <div className="w-full flex gap-x-2 overflow-x-scroll no-scrollbar min-h-[20vh]">
        <div className="p-6 min-w-[80%] bg-primary rounded-xl flex flex-col gap-y-4">
          <h2 className="text-white font-medium text-base">
            Call to our call center
          </h2>
          <p className="text-white/90 text-xs">+251966356610</p>
        </div>
        <div className="p-6 min-w-[80%] bg-primary rounded-xl flex flex-col gap-y-4">
          <h2 className="text-white font-medium text-base">Use our ussd</h2>
          <p className="text-white/90 text-xs">955</p>
        </div>
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
                img={doc1}
                name={"Aman naol"}
                exp={"6"}
                desc={"In publishing and graphic design, Lorem ipsum is a"}
                rate={"⭐⭐⭐⭐⭐"}
              />
            </Link>
          </div>
          <div className="min-w-[70%]">
            <Link href={"/booking"}>
              <DoctorCard
                img={doc3}
                name={"Mahlet naol"}
                exp={"6"}
                desc={"In publishing and graphic design, Lorem ipsum is a"}
                rate={"⭐⭐⭐⭐⭐"}
              />
            </Link>
          </div>
          <div className="min-w-[70%]">
            <Link href={"/booking"}>
              <DoctorCard
                img={doc2}
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
