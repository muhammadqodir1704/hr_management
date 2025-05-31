import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="mx-auto w-full max-w-[1800px] flex p-5">
      <Sidebar />
      <main className="flex flex-col grow">
        <Header />
        <div className="grow">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
