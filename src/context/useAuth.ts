import { UserProfile } from "@/models/User";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

type UserContextType = {
    user: UserProfile | null,
    token: string | null,
    registerUser: (name: string, email: string, password: string) => void,
    loginUser: (name: string, password: string) => void,
    logout: () => void,
    isLoggedin: () => boolean,
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props ) => {

    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile| null>(null);
    const [isReady, setisReady] = useState(false);

    useEffect(() => {
       
    })
    
}