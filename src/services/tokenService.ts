class TokenService {
    token = "";

    setToken(token: string) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    clearToken() {
        this.token = "";
    }
}

const tokenService = new TokenService();
export default tokenService;