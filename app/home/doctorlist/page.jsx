import React from "react";
import DoctorCard from "../../../components/DoctorCard";
import doc from "../../../assets/doc1.png";
import { IoIosArrowBack } from "react-icons/io";
import DropDown from "@/components/DropDown";
import Link from "next/link";

const page = () => {
  const options = [
    { value: "Diabets", label: "Diabets" },
    { value: "Hiv", label: "Hiv" },
    { value: "Cancer", label: "Cancer" },
    { value: "Hiper tension", label: "Hiper tension" },
    { value: "Mental health", label: "Mental health" },
  ];
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex w-full gap-x-2">
        <input
          type={"text"}
          autoFocus
          placeholder={"search doctor"}
          className="px-3 py-2 rounded-xl max-w-[60%] outline-none border-black/25 border-[1px]"
        />
        <div className="w-[40%]">
          <DropDown options={options} />
        </div>
      </div>
      <Link href={"/booking"}>
        <DoctorCard
          img={doc}
          name={"Eyob naol"}
          exp={"4"}
          desc={"In publishing and graphic design, Lorem ipsum is a"}
          rate={"⭐⭐⭐⭐⭐"}
        />
      </Link>
      <Link href={"/booking"}>
        <DoctorCard
          img={doc}
          name={"Eyob naol"}
          exp={"4"}
          desc={"In publishing and graphic design, Lorem ipsum is a"}
          rate={"⭐⭐⭐⭐⭐"}
        />
      </Link>
      <Link href={"/booking"}>
        <DoctorCard
          img={doc}
          name={"Eyob naol"}
          exp={"4"}
          desc={"In publishing and graphic design, Lorem ipsum is a"}
          rate={"⭐⭐⭐⭐⭐"}
        />
      </Link>
      <Link href={"/booking"}>
        <DoctorCard
          img={doc}
          name={"Eyob naol"}
          exp={"4"}
          desc={"In publishing and graphic design, Lorem ipsum is a"}
          rate={"⭐⭐⭐⭐⭐"}
        />
      </Link>
    </div>
  );
};

export default page;
