import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import {
  Home,
  Inbox,
  Calender,
  Search,
  Settings,
  ContactUs,
  AboutUs,
  cardsData,
} from "@/components/screens";
import { Layout } from "@/Layout";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: AppRoutes.home,
        element: <Home cards={cardsData} />,
      },
      {
        path: AppRoutes.inbox,
        element: <Inbox />,
      },
      {
        path: AppRoutes.calender,
        element: <Calender />,
      },
      {
        path: AppRoutes.search,
        element: <Search />,
      },
      {
        path: AppRoutes.settings,
        element: <Settings />,
      },
      {
        path: AppRoutes.contactUs,
        element: <ContactUs />,
      },
      {
        path: AppRoutes.aboutUs,
        element: <AboutUs />,
      },
    ],
  },
]);
