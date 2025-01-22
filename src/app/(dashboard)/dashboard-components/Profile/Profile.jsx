import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, LogOut } from "lucide-react";
import Link from "next/link";

const Profile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden lg:block">
                <div className="cursor-pointer">
                    <p className="text-xs font-medium">DBO</p>
                    <span className="text-gray-600 text-[9px]">admin</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[160px] px-0 py-3">
                <DropdownMenuItem className="flex items-center ps-4 cursor-pointer hover:bg-[#009ef7] focus:bg-[#009ef7] text-gray-500 hover:text-white focus:text-white rounded-none">
                    <Link href="" className="flex items-center gap-2">
                        <CircleUserRound size={15} />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center ps-4 cursor-pointer hover:bg-[#009ef7] focus:bg-[#009ef7] text-gray-500 hover:text-white focus:text-white rounded-none">
                    <Link href="" className="flex items-center gap-2">
                        <LogOut size={15} />
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Profile;
