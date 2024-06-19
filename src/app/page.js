import { DashboardTemplate } from "@/components/dasboardtemplate";
import { Textinput } from "@/components/textinput";
import { Timeline } from "@/components/timeline";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/ZWBsUoABjPH0", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <DashboardTemplate>
      <div className="border-r border-b border-slate-700 px-4 py-2">Home</div>
      <Textinput />
      <div>
        {data.map((item) => {
          return <Timeline key={item._id} item={item} />;
        })}
      </div>
    </DashboardTemplate>
  );
}
