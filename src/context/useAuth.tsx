import { UserProfile } from "@/models/User";
import AuthService from "@/services/authService";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

type UserContextType = {
    user: UserProfile | null,
    token: string | null,
    registerUser: (name: string, email: string, password: string) => void,
    loginUser: (name: string, password: string) => void,
    logoutUser: () => void,
    isLoggedIn: () => boolean,
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {

    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setisReady] = useState(false);

    useEffect(() => { 
        if (user && token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }, [])

    // register method
    const registerUser = async (
        name: string,
        email: string,
        password: string,
    ) => {
        // Register Payload
        const data = {
            name: name,
            email: email,
            password: password,
        }
        await AuthService.registerAPI(data)
            .then((res) => {
                if (res) {
                    const userObj = {
                        name: res?.name,
                        email: res?.email,
                        avatarUrl: res?.avatarUrl,
                    }
                    setToken(res?.token!);
                    setUser(userObj!);
                    console.log("Register Successful");
                    router.push("/dashboard");
                }
            }).catch(err => console.error(`Server error: ${err}`));
    }

    // login method
    const loginUser = async (
        email: string,
        password: string,
    ) => {
        // Login Payload
        const data = {
            email: email,
            password: password,
        }
        await AuthService.loginAPI(data)
            .then((res) => {
                if (res) {
                    const userObj = {
                        name: res?.name,
                        email: res?.email,
                        avatarUrl: res?.avatarUrl,
                    }
                    setToken(res?.token!);
                    setUser(userObj);
                    console.log("Login Successful");
                    router.push("/dashbopard");
                }
            }).catch(err => console.error(err));
    }

    // logout method
    const logoutUser = async () => {
        setUser(null);
        setToken(null);
        axios.defaults.headers.common["Authorization"] = null;
        await AuthService.logoutAPI()
        .then((res) => {
            // do something with response
        })
        router.push("/");
    }

    // isLoggedin method
    const isLoggedIn = () => {
        return !!user;
    }

    return (
        <UserContext.Provider value={{ user, token, registerUser, loginUser, logoutUser, isLoggedIn }}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
}

export const useAuth = () => React.useContext(UserContext);