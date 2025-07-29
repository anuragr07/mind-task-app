import { UserProfile } from "@/models/User";
import AuthService from "@/services/authService";
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

    // We probably do not need this because we are storing our user in state
    // useEffect(() => {
    //     // Add code to check & user
    // })
    
    // register method
    const register = async (
        name: string,
        email: string,
        password: string,
    ) => {
        const data = {
            name: name,
            email: email,
            password: password,
        }
        await AuthService.registerAPI(data)
        .then((res) => {
            if(res) {
                const userObj = {
                    name: res?.data.name,
                    email: res?.data.email,
                    avatarUrl: res?.data.avatarUrl,
                }
                setToken(res?.data.token!);
                setUser(userObj!);
                console.log("Login Successful");
            }
        }) 
    }

    // login method

    // logout method

    // isLoggedin method
}