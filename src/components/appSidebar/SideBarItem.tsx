import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface SidebarItem {
  title: string;
  url?: string;
  icon?: React.ComponentType;
  children?: SidebarItem[];
}

const SidebarItemComponent: React.FC<{ item: SidebarItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <Collapsible
        key={item.title}
        onOpenChange={setIsOpen}
        defaultOpen
        className="group/collapsible"
      >
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <div className="">
              <span>{item.title}</span>
            </div>
            <div>
              <ChevronDown
                className={`transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          {item.children.map((child) => (
            <SidebarItemComponent key={child.title} item={child} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  } else {
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <Link to={item.url!}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};

export function renderSidebarItem(item: SidebarItem) {
  return <SidebarItemComponent item={item} />;
}
