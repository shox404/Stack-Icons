"use client";

import {useEffect} from "react";
import {useIcons} from "@/app/store/main";
import Single from "@/app/sections/single"
import Plural from "@/app/sections/plural"
import Image from "next/image";

export default function Home() {
  const {get,filter} = useIcons();

  useEffect(() => {
      get();
  },[true]);

  return (
      <main className="lg:p-7 overflow-x-hidden">
          <div className="text-center lg:p-7">
              <div className="flex items-center justify-center">
                  <Image src="/logo-tr.png" alt="logo" width={100} height={100} />
                  <h1 className="text-2xl lg:text-5xl font-bold text-gray-800">Stack Icons</h1>
              </div>
              <p className="text-sm lg:text-xl font-medium text-balance mt-2 lg:mt-5 m-auto">A well-crafted portfolio showcases your impact
                  and abilities, opening doors to new opportunities.</p>
          </div>
          <div className="navbar bg-neutral text-neutral-content w-[95%] lg:w-10/12 my-5 mx-auto rounded-2xl">
              <label className="input input-bordered text-black rounded-xl w-full flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" onChange={(e) => filter(e.target.value)}/>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70">
                      <path
                          fillRule="evenodd"
                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                          clipRule="evenodd"/>
                  </svg>
              </label>
          </div>
          <Single/>
          <Plural/>
      </main>
  );
}
