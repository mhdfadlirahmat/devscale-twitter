import { DashboardTemplate } from "@/components/dasboardtemplate";
import { Textinput } from "@/components/textinput";
import { Timeline } from "@/components/timeline";
import { TwitterIcon } from "@/components/twittericon";
import * as SolarIconSet from "solar-icon-set";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/ZWBsUoABjPH0", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <DashboardTemplate>
      <div className="grid grid-cols-2 items-center">
        <div className="flex items-center px-4">
          <div className="xl:hidden">
            <TwitterIcon className="fill-white w-6" />
          </div>
          <div className="px-6 xl:px-0 py-2">Home</div>
        </div>
        <div className="flex xl:hidden justify-end px-4">
          <SolarIconSet.HamburgerMenu size={24} />
        </div>
      </div>
      <Textinput />
      <div>
        {data.map((item) => {
          return <Timeline key={item._id} item={item} />;
        })}
      </div>
    </DashboardTemplate>
  );
}
