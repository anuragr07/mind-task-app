import axios from "axios";
import { useRouter } from "next/navigation";


export const handleError = (error: any) => {

    const router = useRouter();

    if(axios.isAxiosError(error)) {
        var err = error.response;
        if(Array.isArray(err?.data.errors)) {
            for (let val of err.data.errors) {
                console.error(val.description);
            }
        } else if (typeof err?.data.errors === 'object') {
            for (let e in err?.data.errors) {
                console.error(err.data.errors[e][0]);
            }
        } else if (err?.data) {
            console.error(err.data);
        } else if(err?.status === 401) {
            console.error("Please login");
            router.push("/login");
        } else if (err) {
            console.error(err?.data);
        }
    }
}