import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = ({ to, ssr }) => {
    const router = useRouter();

    useEffect(() => {
        if (ssr) {
            // for server-side rendering...
            window.location.pathname = to;
        } else {
            // for client side rendering...
            router.push(to);
        }
    }, []);
    return null;
};

export default Redirect;
