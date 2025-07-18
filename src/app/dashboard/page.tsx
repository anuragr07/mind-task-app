'use client'

import ProtectedRoute from "@/components/protected-route";

export default function Dashboard() {

    return (
        <ProtectedRoute>
            <div className="text-2xl">Welcome to your Dashboard</div>
        </ProtectedRoute>
    )
}