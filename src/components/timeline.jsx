"use client";

import Image from "next/image";
import { Dropdown } from "./dropdown";

export const Timeline = ({ item }) => {
  return (
    <div className="flex gap-4 my-2 p-4 border-b border-t border-slate-700">
      <Image
        src="/avatar.jpg"
        width={40}
        height={40}
        alt="Rounded avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="w-full space-y-1">
        <div className="grid grid-cols-2">
          <div className="flex gap-1">
            <div className="font-medium">Rafatar</div>
            <div className="text-slate-400">@akunaslirafatar</div>
          </div>
          <div className="flex justify-end">
            <Dropdown key={item._id} item={item} />
          </div>
        </div>
        <div>
          <div>{item.tweet}</div>
        </div>
      </div>
    </div>
  );
};
