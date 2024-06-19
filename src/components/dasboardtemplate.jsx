import React from "react";
import * as SolarIconSet from "solar-icon-set";
import { TwitterIcon } from "./twittericon";
import { BookmarkIcon } from "./bookmarkicon";
import { ListIcon } from "./listicon";

export const DashboardTemplate = ({ children }) => {
  return (
    <div className=" font-Poppins font-light  bg-twitter py-2 px-64">
      <div className="flex h-screen xpy-4">
        <aside className="2-[275px] text-white space-y-2 ">
          <div>
            <TwitterIcon className="fill-white w-8" />
          </div>
          <section className="space-y-2">
            <Menu
              label="Home"
              icon={<SolarIconSet.Home2 color="#FFFFFF" size={20} />}
            />
            <Menu
              label="Explore"
              icon={<SolarIconSet.Hashtag color="#FFFFFF" size={20} />}
            />
            <Menu
              label="Notifications"
              icon={<SolarIconSet.Bell color="#FFFFFF" size={20} />}
            />
            <Menu
              label="Messages"
              icon={<SolarIconSet.ChatSquare color="#FFFFFF" size={20} />}
            />
            <Menu
              label="Bookmarks"
              icon={<BookmarkIcon className="fill-slate-200 w-5" />}
            />
            <Menu
              label="Lists"
              icon={<ListIcon className="fill-slate-200 w-5" />}
            />
            <Menu
              label="Profile"
              icon={<SolarIconSet.UserCircle color="#FFFFFF" size={20} />}
            />
            <Menu
              label="More"
              icon={<SolarIconSet.MenuDots color="#FFFFFF" size={20} />}
            />

            <button className=" bg-twitterIcon w-fit h-fit rounded-full px-14 py-1 font-normal text-xs">
              Tweet
            </button>
          </section>
        </aside>
        <main className="w-[calc(100%)] text-white bg-twitter border-l border-r border-slate-700 mx-8">
          {children}
        </main>
      </div>
    </div>
  );
};
const Menu = ({ label, icon }) => {
  return (
    <div className="px-2 py-1 bg-transparent hover:bg-slate-600 hover:rounded-xl flex gap-4 items-center">
      {icon} <div>{label}</div>
    </div>
  );
};