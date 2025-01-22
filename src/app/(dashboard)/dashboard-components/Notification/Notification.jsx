import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import Link from "next/link";

const Notification = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="secondary"
                    className="h-[30px] w-[30px] bg-gray-200 hover:bg-gray-200 text-gray-600 cursor-pointer flex justify-center items-center rounded-full focus-visible:ring-0"
                >
                    <Bell size={20} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[380px] p-0">
                <div className=" grid grid-cols-3">
                    <p className="text-sm text-gray-600  text-center py-3 border-b-2">
                        Orders
                    </p>
                    <p className="text-sm text-gray-600  text-center py-3 border-b-2">
                        Seller
                    </p>
                    <p className="text-sm text-gray-600  text-center py-3 border-b-2">
                        Payouts
                    </p>
                </div>

                <div>
                    <p className="text-lg py-6 text-gray-600 text-center">
                        No notification found
                    </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <div className="min-h-20"></div>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <Link
                    href="#"
                    className="text-sm block text-gray-600  text-center py-3"
                >
                    View All Notifications
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Notification;
