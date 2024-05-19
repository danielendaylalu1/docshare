import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center w-full">
      <div className="flex flex-col items-center gap-y-8">
        {" "}
        <div className="flex w-40 h-40 bg-primary items-center justify-center rounded-full">
          <h1 className="text-xl text-primary ">Logo</h1>
        </div>
        <h1 className="text-2xl font-bold text-primary ">Doctor Share</h1>
      </div>
      <Link
        href={"/signup"}
        className="absolute bottom-16 bg-primary text-lg text-white py-4 px-8 rounded-xl flex items-center"
      >
        Go to our app
        <FaLongArrowAltRight size={28} className="ml-8" />
      </Link>
    </main>
  );
}
