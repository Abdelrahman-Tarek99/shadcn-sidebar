import {
  Activity,
  BookMarked,
  Calendar,
  Home,
  Inbox,
  MailPlus,
  Search,
  Settings,
} from "lucide-react";
import { AppRoutes } from "@/components/Routes";

// Menu items.
export const SideBarLayoutItems = [
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
  {
    title: "Reach Out",
    url: AppRoutes.contactUs,
    icon: Activity,
    children: [
      {
        title: "Contact Us",
        url: AppRoutes.contactUs,
        icon: MailPlus,
      },
      {
        title: "About Us",
        url: AppRoutes.aboutUs,
        icon: BookMarked,
      },
    ],
  },
];
