"use client";
import { useRouter } from "next/navigation";
import * as SolarIconSet from "solar-icon-set";

export const Dropdown = ({ item }) => {
  const router = useRouter;
  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/ZWBsUoABjPH0", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([item._id]),
    });
    router.refresh();
  }

  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="">
        <SolarIconSet.MenuDots color="#FFFFFF" size={20} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-1 shadow bg-twitter rounded-box border border-slate-700 ring-1"
      >
        <li>
          <a onClick={handleDeleteData}>Delete</a>
        </li>
      </ul>
    </div>
  );
};
