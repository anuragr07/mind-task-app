import config from "@/lib/config";
import { UserProfileToken } from "@/models/User";
import axios from "axios";

const BASE_URL = config.api.baseUrl as string;

interface RegisterPayload {
    name: string,
    email: string,
    password: string,
}

interface LoginPayload {
    email: string,
    password: string,
}

class AuthService {

    // Regfister service
    static registerAPI = async (data: RegisterPayload) => {

        const authBaseUrl = config.api.authUrl as string;
        // const registerUrl = `${authBaseUrl}/register`;
        const registerUrl = `http://localhost:8000/api/auth/register`;

        try {
            const response = await axios.post<UserProfileToken>(registerUrl, data, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true, // Required if backend is using cookies
            });
            return response.data;
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error("Axios error:", err.response?.data);
                throw new Error(err.response?.data?.error || "Registration Failed!");
            }
            throw new Error("Unexpected error occurred");
        }
    }

    // login service
    static loginAPI = async (data: LoginPayload) => {

        const loginUrl = `${BASE_URL}/api/auth/login`;

        try {
            const response = await axios.post<UserProfileToken>(loginUrl, data, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            return response.data;
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                throw new Error(err.response?.data?.error || "Login Failed!")
            }
            throw new Error("Unexpected error occured")
        }
    }

    // logout service
    static logoutAPI = async () => {
        // your logout code here
        const logoutUrl = `http://localhost:8000/api/auth/logout`;

        try {
            const response = await axios.post(logoutUrl, {}, {
                withCredentials: true
            });
            return response.data;
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                throw new Error(err.response?.data?.error || "Login Failed!")
            }
            throw new Error("Unexpected error occured")
        }

        // TODO: clear refresh token from cookie
        // TODO: clear access token from memory
    }

    // refresh token service
    static refreshAccessTokenAPI = async () => {
        // const refreshUrl = `${BASE_URL}/api/auth/refresh`;
        const refreshUrl = `http://localhost:8000/api/auth/refresh`

        try {
            const response = await axios.post(refreshUrl, {}, {
                withCredentials: true,
            });
            return response.data;
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                throw new Error(err.response?.data?.error || "Refresh access token failed")
            }
            throw new Error(err.message);
        }
    }
}

export default AuthService;