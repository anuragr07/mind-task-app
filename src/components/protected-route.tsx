'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import tokenService from '@/services/tokenService';
import { isUserAuthenticated } from '@/lib/authClient';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [user, setUser] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await isUserAuthenticated();
            setUser(isAuthenticated);
            console.log(isAuthenticated);

            if (!isAuthenticated) {
                router.push("/login");
            }
        };

        checkAuth();
    }, [router]);


    if(user === null) return <div>Loading...</div>

    return <>{children}</>;
}