import { Search } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }) {
    return (
        <form {...props}>
            <SidebarGroup className="pt-3">
                <SidebarGroupContent className="relative">
                    <Label htmlFor="search" className="sr-only">
                        Search
                    </Label>
                    <SidebarInput
                        id="search"
                        placeholder="Search in menu"
                        className="pl-8 bg-transparent focus-visible:ring-0 border-gray-400"
                    />
                    <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none text-gray-400" />
                </SidebarGroupContent>
            </SidebarGroup>
        </form>
    );
}
