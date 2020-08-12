import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import "react-datepicker/dist/react-datepicker.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//         pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
// };

export default MyApp;
