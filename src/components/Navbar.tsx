import Image from "next/image";
import ShakeHand from "../../src/public/ShakeHand.png";
import { Input } from "@/components/ui/input";

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
    <div className="flex w-full h-20 gap-4 items-center p-4">
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

      <div className="ml-20">
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
