import { Menus } from "./menus";

export const DashboardTemplate = ({ children }) => {
  return (
    <div className="h-screen bg-fixed bg-twitter">
      <div className=" font-Poppins font-light py-2 xl:px-64">
        <div className="flex xpy-4">
          <aside className="hidden xl:flex text-white ">
            <Menus />
          </aside>
          <main className="text-white border-l border-r border-slate-700 mx:0 xl:mx-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
