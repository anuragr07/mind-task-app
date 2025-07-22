"use client"

import * as React from "react"
import { LetterText, List, Mail, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import AuthService from "@/services/authService"

export function ProfileToggle() {

    const handlelogout = async () => {

        try {
            const response = AuthService.logout();
            
        } catch (err) {

        }

    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <User className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">User Profile</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="p-2">
                <Image src="https://robohash.org/cook-seem" width={100} height={100} className="m-auto border-2 border-gray-400 rounded-full bg-slate-300" alt="Profile Picture"></Image>
                <div className="p-2">
                    <DropdownMenuItem>
                        <User></User>
                        Name
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Mail></Mail>
                        Example@email.com
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <List></List>
                        Add lists here
                    </DropdownMenuItem>
                </div>
                <DropdownMenuItem>
                    <Button variant="destructive" onClick={handlelogout} className="m-auto">
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
