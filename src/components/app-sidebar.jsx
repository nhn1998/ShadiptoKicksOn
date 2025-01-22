"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { Boxes, LayoutPanelLeft,BadgeDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "./search-form";
import Logo from "../../public/Logo.svg"
import { NavMain } from "./nav-main";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/admin",
            icon: LayoutPanelLeft,
        },
        {
            title: "Products",
            icon: Boxes,
            items: [
                {
                    title: "Add new product",
                    url: "/admin/products/create",
                },
                {
                    title: "All products",
                    url: "/admin/products/all-products",
                },
                {
                    title: "In house products",
                    url: "#",
                },
                {
                    title: "Digital products",
                    url: "#",
                },
                {
                    title: "Bulk Import",
                    url: "#",
                },
                {
                    title: "Bulk export",
                    url: "#",
                },
                {
                    title: "Category",
                    url: "#",
                },
                {
                    title: "Category wise discount",
                    url: "#",
                },
                {
                    title: "Brand",
                    url: "#",
                },
                {
                    title: "Attribute",
                    url: "#",
                },
                {
                    title: "Colors",
                    url: "#",
                },
                {
                    title: "Size guide",
                    url: "#",
                },
                {
                    title: "Product reviews",
                    url: "#",
                },
            ],
        },
        {
            title: "Sales",
            url: "#",
            icon: BadgeDollarSign,
            items: [
                {
                    title: "All orders",
                    url: "#",
                },
                {
                    title: "inhouse orders",
                    url: "#",
                },
                {
                    title: "pick-up point order",
                    url: "#",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }) {
    return (
        <Sidebar {...props} className="">
            <SidebarContent className="bg-white overflow-x-hidden">
                <div className="py-2">
                    <Link
                        href="/admin"
                        className="flex items-center justify-center"
                    >
                        <Image
                            src={Logo}
                            
                            alt="picture"
                            className="object-cover h-[70px]"
                        />
                    </Link>
                </div>
                <SearchForm />
                <SidebarGroup className="p-0">
                    <SidebarMenu className="space-y-[2px]">
                        <NavMain items={data.navMain} />
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
