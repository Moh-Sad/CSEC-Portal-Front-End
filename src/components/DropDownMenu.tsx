"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropDownMenu() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-46 h-12 border-1 border-gray-200 rounded-[8px]">
          <div className="flex gap-0.5">
            <div>Av</div>
            <div className="flex flex-col">
                <h1 className="font-bold">Henok Assefa</h1>
                <h3 className="text-gray-600">UI Design</h3>
            </div>
            <div>
                ^
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top"> my profile</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom"> logout</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
