import Image from "next/image";
import ShakeHand from "../../src/public/img/ShakeHand.png";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { GoBell } from "react-icons/go";

interface NavbarProps {
  name: string;
  time?: string;
}

export default function Navbar({ name, time }: NavbarProps) {
  const getTimeOfDay = () => {
    if (time) return time;
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };

  return (
    <div className="flex h-20 gap-4 items-center p-4 ml-2">
      <div className="flex gap-3 ml-5">
        <div>
          <div className="flex">
            <h1 className="text-lg font-semibold">Hello {name}</h1>
            <Image
              src={ShakeHand}
              alt="Handshake icon"
              width={18}
              height={14}
            />
          </div>
          <h3 className="text-sm text-gray-600">Good {getTimeOfDay()}</h3>
        </div>
      </div>

      <div className="flex justify-center gap-2 border-1 border-gray-200 rounded-[8px] h-12 items-center p-2 ml-5 focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-opacity-50 focus-visible:ring-1">
        <LuSearch size={25} className="p-6 items-center" />
        <div className="p-2">
          <Input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="flex w-12 h-12 bg-[#34495E1A] border-1 border-gray-200 rounded-[8px] justify-center items-center">
        <GoBell size={20}/>
      </div>
    </div>
  );
}
