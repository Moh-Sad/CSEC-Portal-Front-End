import Image from "next/image";
import ShakeHand from "../../src/public/ShakeHand.png";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";

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

      <div className="flex gap-2 border-1 border-gray-300 rounded-[4px] items-center p-2">
        <LuSearch size={23} className="items-center"/>
        <Input
          type="text"
          placeholder="Search"
          className="p-2"
          width={261}
          height={50}
        />
      </div>
    </div>
  );
}
