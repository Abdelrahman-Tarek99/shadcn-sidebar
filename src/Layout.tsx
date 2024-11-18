import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/appSidebar/appSidebar";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="p-6 w-full h-full overflow-hidden">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};
