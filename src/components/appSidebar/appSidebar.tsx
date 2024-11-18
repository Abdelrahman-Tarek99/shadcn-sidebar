import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/components/Routes";

// Menu items.
const items = [
  {
    title: "Home",
    url: AppRoutes.home,
    icon: Home,
  },
  {
    title: "Inbox",
    url: AppRoutes.inbox,
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: AppRoutes.calender,
    icon: Calendar,
  },
  {
    title: "Search",
    url: AppRoutes.search,
    icon: Search,
  },
  {
    title: "Settings",
    url: AppRoutes.settings,
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      onClick={() => {
                        console.log("Clicked on: ", item.title);
                        console.log("Navigating to: ", item.url);
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
