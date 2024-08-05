"use client";
import { Landmark, CircuitBoard, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const timeline = [
  {
    icon: <Landmark size={20} />,
    title: "JP Morgan",
    details: "Machine Learning Engineer within JP Morgan Chase",
  },
  {
    icon: <CircuitBoard size={20} />,
    title: "SUGA Electronics",
    details: "Generative AI Developer within SUGA Electronics",
  },
  {
    icon: <MonitorSmartphone size={20} />,
    title: "HKUST",
    details: "Software Developer within HKUST ITSC",
  },
];


export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full h-full">
          <Card>
            <Link
              href={"/home"}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
            >
              <div>
                {/*Line code below */}
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
              </div>
              {timeline.map((item) => (
                <div className="z-10 flex flex-row items-center justify-between w-full">

                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display
                  w-48">
                    {item.title}
                  </span>
                  <span className="relative z-10 flex items-center justify-center w-12 
                  h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 
                  bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {item.icon}
                  </span>
                  <span className="mt-4 text-sm text-right duration-1000 text-zinc-400 group-hover:text-zinc-200 lg:mt-0 lg:order-1 w-48">
                    {item.details}
                  </span>
                </div>
              ))}
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
