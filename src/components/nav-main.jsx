"use client";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({ items }) {
    const pathname = usePathname();
    // console.log("The pathname is:", pathname);

    const isActive = (item) => {
        if (pathname === item.url) return true;
        if (item.items?.some((subItem) => pathname === subItem.url))
            return true;
        return false;
    };

    return (
        <SidebarGroup className="p-0">
            <SidebarMenu>
                {items.map((item) => {
                    const active = isActive(item);
                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <Link href={item.url ? item.url : "#"}>
                                        <button
                                            size="lg"
                                            tooltip={item.title}
                                            className={`hover:text-[#009ef7] w-full py-[10px] px-6 gap-3 flex items-center bg-transparent rounded-none hover:bg-[#009cf725] border-l-4  hover:border-[#009ef7] duration-300 ${
                                                active
                                                    ? "bg-[#009cf725] text-[#009ef7] border-[#009ef7]"
                                                    : "bg-transparent text-black border-transparent"
                                            }`}
                                        >
                                            {item.icon && (
                                                <item.icon size={20} />
                                            )}
                                            <span className={`font-semibold`}>
                                                {item.title}
                                            </span>
                                            {item.items && (
                                                <ChevronRight
                                                    size={20}
                                                    className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                                />
                                            )}
                                        </button>
                                    </Link>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub className="gap-0 border-none pr-0 mr-0">
                                        {item.items?.map((subItem) => (
                                            <SidebarMenuSubItem
                                                key={subItem.title}
                                                className=""
                                            >
                                                <Link href={subItem.url}>
                                                    <button
                                                        asChild
                                                        className={`px-3 py-1 w-full text-left hover:text-[#009ef7] border-l-2 hover:bg-[#009cf725] hover:border-[#009ef7] duration-300 ${
                                                            pathname ===
                                                            subItem.url
                                                                ? "bg-[#009cf725] border-[#009ef7] text-[#009ef7]"
                                                                : "border-gray-300 text-black"
                                                        }`}
                                                    >
                                                        <span className="text-sm font-semibold capitalize">
                                                            {subItem.title}
                                                        </span>
                                                    </button>
                                                </Link>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
