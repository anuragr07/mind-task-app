// Dotenv configuration to load environment variables
import dotenv from 'dotenv';

try {
    const result = dotenv.config();
} catch (error) {
    console.log("Error while configuring dotenv.");
}

const config = {
    api: {
        baseUrl: process.env.API_BASE_URL,
        authUrl: process.env.API_AUTH_BASE_URL,
    }
}

export default config;