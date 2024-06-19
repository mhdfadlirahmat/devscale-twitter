"use client";

import Image from "next/image";
import * as SolarIconSet from "solar-icon-set";
import { ImageIcon } from "./imageicon";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Textinput = () => {
  const router = useRouter();
  const [tweet, setTweet] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/ZWBsUoABjPH0", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ tweet }]),
    });
    router.refresh();
    setTweet("");
  }

  return (
    <div className="border-t border-b border-slate-700 py-3">
      <div className="flex gap-3 px-4">
        <Image
          src="/avatar.jpg"
          width={40}
          height={40}
          alt="Rounded avatar"
          className="w-10 h-10 rounded-full"
        />
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What's happening?"
        ></textarea>
      </div>
      <div className="grid grid-cols-2 items-center">
        <section className="flex gap-2 items-center px-16">
          <ImageIcon className="fill-twitterIcon w-6" />
          <SolarIconSet.Chart color="#1DA1F2" size={20} />
          <SolarIconSet.SmileCircle color="#1DA1F2" size={20} />
          <SolarIconSet.CalendarDate color="#1DA1F2" size={20} />
        </section>
        <div className="flex justify-end px-4">
          <button
            onClick={handleCreateData}
            className=" bg-twitterIcon w-fit h-fit rounded-full px-4 py-1 font-normal text-xs"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
