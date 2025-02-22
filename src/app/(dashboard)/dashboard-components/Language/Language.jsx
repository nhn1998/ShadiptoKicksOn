import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Language = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="h-[30px] w-[30px] cursor-pointer bg-gray-200 text-gray-600 border-none flex justify-center items-center rounded-full">
                    <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/color/50/usa.png"
                        alt="usa"
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[160px] px-0 py-3 space-y-[2px]">
                <DropdownMenuItem className="flex items-center ps-4 rounded-none cursor-pointer hover:bg-[#009ef7] focus:bg-[#009ef7] hover:text-white focus:text-white">
                    <Link href="" className="h-[20px] w-[20px]">
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/color/50/usa.png"
                            alt="usa"
                        />
                    </Link>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center ps-4 rounded-none cursor-pointer hover:bg-[#009ef7] focus:bg-[#009ef7] hover:text-white focus:text-white">
                    <Link href="" className="h-[20px] w-[20px]">
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/color/50/bangladesh.png"
                            alt="bangladesh"
                        />
                    </Link>
                    Bangla
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center ps-4 rounded-none cursor-pointer hover:bg-[#009ef7] focus:bg-[#009ef7] hover:text-white focus:text-white">
                    <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/emoji/48/saudi-arabia-emoji.png"
                        alt="saudi-arabia-emoji"
                    />
                    English
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Language;
