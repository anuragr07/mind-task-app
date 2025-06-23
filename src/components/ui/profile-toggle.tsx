"use client"

import * as React from "react"
import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ProfileToggle() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <User className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => console.log("Item 1")}>
                    Item 1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Item 2")}>
                    Item 2
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Item 3")}>
                    Item 3
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
