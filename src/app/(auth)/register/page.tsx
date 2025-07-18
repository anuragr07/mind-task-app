'use client'

import { useEffect, useState } from "react";
import { RegisterForm } from "./register-form";
import { useRouter } from "next/navigation";
import { isUserAuthenticated } from "@/lib/authClient";

export default function Login() {

    const router = useRouter();
    const [user, setUser] = useState<boolean | null>(null);

    
    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await isUserAuthenticated();
            setUser(isAuthenticated);
            if (isAuthenticated) {
                router.push("/dashboard");
            }
        };

        checkAuth();
    }, [router]);

    if(user == null) return <>Loading...</>

    return (
        <RegisterForm />
    );
}
