import React from 'react'
import { ModeToggle } from './ui/mode-toggle'
import { ProfileToggle } from './ui/profile-toggle'

export function Header() {
    return (
        <header className="h-1/12 w-full flex justify-end items-center space-x-3 pr-3">
            <h1 className="text-4xl mr-auto ml-5 font-extrabold md:m-auto">
                MindTask
            </h1>
            <div className="absolute mr-12">
                <ModeToggle />
            </div>
            {/* TODO: Displays only if the user is logged in */}
            <div className="absolute">
                <ProfileToggle />
            </div>
        </header>
    )
}