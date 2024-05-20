import React from "react";
import DoctorCard from "@/components/DoctorCard";

import doc1 from "../../../assets/doc1.jpeg";
import doc2 from "../../../assets/doc2.jpeg";
import doc3 from "../../../assets/doc3.jpeg";
import doc4 from "../../../assets/doc4.jpeg";

export default function page() {
  return (
    <div className="flex flex-col gap-y-4">
      `<h1 className="w-full text-center font-bold">Appointments</h1>
      <div className="flex py-4 flex-row justify-between gap-4 items-center w-full">
        <p className="text-white bg-primary text-xs w-full px-4 py-4 rounded-xl text-center self-start cursor-pointer">
          Individual
        </p>
        <p className=" bg-primary/10 text-black w-full text-xs px-4 py-4 rounded-xl text-center self-start cursor-pointer">
          Community
        </p>
      </div>
      <div className="flex justify-center items-center gap-y-8 flex-col">
        <DoctorCard
          img={doc3}
          showbook={false}
          name={"Mahlet naol"}
          exp={"6"}
          desc={"Jun 21, 2:00 PM"}
          rate={"⭐⭐⭐⭐⭐"}
        />
        <DoctorCard
          img={doc1}
          showbook={false}
          name={"Eyob naol"}
          exp={"6"}
          desc={"Jun 21, 2:00 PM"}
          rate={"⭐⭐⭐⭐⭐"}
        />
      </div>
    </div>
  );
}
