import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/appSidebar/appSidebar";
import { Outlet } from "react-router-dom";
import { Loader } from "@/components";
import { Suspense } from "react";

export const Layout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full overflow-hidden">
        <SidebarTrigger />
        <div className="p-6  grid place-items-center">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </SidebarProvider>
  );
};
