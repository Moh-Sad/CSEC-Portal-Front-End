'use client';

import Navbar from "../../../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div>
        <Navbar name="Henok" />
      </div>
      <div className="flex items-center justify-center h-[100vh] w-full">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}

