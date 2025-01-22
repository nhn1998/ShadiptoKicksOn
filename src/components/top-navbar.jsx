import Language from "@/app/(dashboard)/dashboard-components/Language/Language";
import Notification from "@/app/(dashboard)/dashboard-components/Notification/Notification";
import Profile from "@/app/(dashboard)/dashboard-components/Profile/Profile";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Globe, Plus, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TopNavbar() {
    return (
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-2 shadow-sm bg-background px-6">
            <div className="flex items-center gap-5">
                <SidebarTrigger className=""></SidebarTrigger>
                <Link
                    href=""
                    className="h-[30px] w-[30px] bg-gray-200 hover:bg-[#009ef7] text-gray-600 hover:text-white duration-500 cursor-pointer flex justify-center items-center rounded-full"
                >
                    <Globe size={20} />
                </Link>
                <Link
                    href=""
                    className="h-[30px] w-[30px] bg-gray-200 hover:bg-[#009ef7] text-gray-600 hover:text-white duration-500 cursor-pointer flex justify-center items-center rounded-full"
                >
                    <ShieldCheck size={20} />
                </Link>
                <div className="p-2 xl:flex items-center hidden gap-5">
                    <Link
                        href="/admin"
                        className="text-[13px] text-gray-800 hover:text-[#009ef7] duration-500 font-semibold mx-2"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/all_orders"
                        className="text-[13px] text-gray-800 hover:text-[#009ef7] duration-500 font-semibold mx-2"
                    >
                        Orders
                    </Link>
                    <Link
                        href="/admin"
                        className="text-[13px] text-gray-800 hover:text-[#009ef7] duration-500 font-semibold mx-2"
                    >
                        Homepage Settings
                    </Link>
                    <Button
                        variant="secondary"
                        className="text-[#009ef7] hover:text-white duration-300 hover:bg-[#009ef7] px-5 text-sm font-semibold bg-[#f1fafd]"
                    >
                        Add New <Plus />
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Notification />
                <Language />
                <Profile />
                <Link href="#">
                    <Image
                        src="https://doubleboriginal.com/public/uploads/all/QnmzR1RsTqxrVeLIYcAC16i7iHhKqcWCyRlNzkS4.jpg"
                        width={100}
                        height={100}
                        alt="picture"
                        className="h-10 w-10"
                    />
                </Link>
            </div>
        </header>
    );
}
