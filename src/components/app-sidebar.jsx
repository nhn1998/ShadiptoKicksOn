import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { Boxes, LayoutPanelLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "./search-form";
import Logo from "../../public/Logo.svg"

// This is sample data.
const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "#",
        },
        {
            title: "Building Your Application",
            url: "#",
            items: [
                {
                    title: "Routing",
                    url: "#",
                },
                {
                    title: "Data Fetching",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Rendering",
                    url: "#",
                },
                {
                    title: "Caching",
                    url: "#",
                },
                {
                    title: "Styling",
                    url: "#",
                },
                {
                    title: "Optimizing",
                    url: "#",
                },
                {
                    title: "Configuring",
                    url: "#",
                },
                {
                    title: "Testing",
                    url: "#",
                },
                {
                    title: "Authentication",
                    url: "#",
                },
                {
                    title: "Deploying",
                    url: "#",
                },
                {
                    title: "Upgrading",
                    url: "#",
                },
                {
                    title: "Examples",
                    url: "#",
                },
            ],
        },
        {
            title: "API Reference",
            url: "#",
            items: [
                {
                    title: "Components",
                    url: "#",
                },
                {
                    title: "File Conventions",
                    url: "#",
                },
                {
                    title: "Functions",
                    url: "#",
                },
                {
                    title: "next.config.js Options",
                    url: "#",
                },
                {
                    title: "CLI",
                    url: "#",
                },
                {
                    title: "Edge Runtime",
                    url: "#",
                },
            ],
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Accessibility",
                    url: "#",
                },
                {
                    title: "Fast Refresh",
                    url: "#",
                },
                {
                    title: "Next.js Compiler",
                    url: "#",
                },
                {
                    title: "Supported Browsers",
                    url: "#",
                },
                {
                    title: "Turbopack",
                    url: "#",
                },
            ],
        },
        {
            title: "Community",
            url: "#",
            items: [
                {
                    title: "Contribution Guide",
                    url: "#",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }) {
    return (
        <Sidebar {...props} className="bg-green-800">
            <SidebarContent className="bg-white">
                <div className="h-[70px]">
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
                        <SidebarMenuItem className="bg-transparent hover:bg-[#3a3f50] py-[10px] px-6">
                            <Link
                                href="/admin"
                                className="flex items-center gap-3 text-gray-800 text-sm font-semibold"
                            >
                                <LayoutPanelLeft size={20} />
                                Dashboard
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="bg-transparent hover:bg-[#3a3f50] py-[10px] px-6">
                            <Link
                                href="/admin"
                                className="flex items-center gap-3 text-gray-800 text-sm font-semibold"
                            >
                                <Boxes size={20} />
                                Products
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="bg-transparent hover:bg-[#3a3f50] py-[10px] px-6">
                            <Link
                                href="/admin"
                                className="flex items-center gap-3 text-gray-800 text-sm font-semibold"
                            >
                                <LayoutPanelLeft size={20} />
                                Dashboard
                            </Link>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
