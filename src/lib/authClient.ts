import AuthService from "@/services/authService";
import tokenService from "@/services/tokenService";

export async function isUserAuthenticated() {
    let accessToken = tokenService.getToken();

    if(!accessToken) {
        try {
            const response = await AuthService.refreshAccessToken();
            accessToken = response.accessToken;
            if(accessToken) {
                tokenService.setToken(accessToken);
            } else {
                return false;
            }
        } catch (err: any) {
            console.error(err);
            return false;
        }
    }

    return true;
}