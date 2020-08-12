import BaseLayout from "@/components/layouts/BaseLayout";
import { withRouter } from "next/router";
import BasePage from "@/components/shared/BasePage";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
    // create an alias for data so that you can reference it as portfolio, post, etc...

    // const { data: portfolio, error, loading } = useGetData(
    //     router.query.id ? `/api/v1/posts/${router.query.id}` : null
    // );

    // The conditional fetching above was transferred to the SWR function in useGetPostById
    const { data: userData, loading: loadingUser } = useGetUser();

    return (
        <BaseLayout user={userData} loading={loadingUser}>
            <BasePage header="Portfolio Details">
                {JSON.stringify(portfolio)}
            </BasePage>
        </BaseLayout>
    );
};

// getServerSideProps gives you a context object from which you can
// destructure / extract the query parameter
// export async function getServerSideProps({ query }) {
//     const json = await new PortfolioApi().getById(query.id);
//     const portfolio = json.data;

//     return {
//         props: { portfolio },
//     };
// }

// Like getStaticProps, getStaticPaths is also called at build time
export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    // GET the paths that we want to pre-render based on portfolio id
    const paths = portfolios.map((portfolio) => {
        return {
            params: {
                id: portfolio._id,
            },
        };
    });

    // fallback: false - not found pages will be resolved as 404 page
    return { paths, fallback: false };
}

// this function is called during build time (server-side)
export async function getStaticProps({ params }) {
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data;

    return { props: { portfolio } };
}

export default Portfolio;

// Portfolio.getInitialProps = async ({ query }) => {
//     let portfolio = {};
//     const id = query.id;
//     try {
//         const res = await axios.get(
//             `https://jsonplaceholder.typicode.com/posts/${id}`
//         );
//         portfolio = res.data;
//     } catch (e) {
//         console.error(e);
//     }
//     return { portfolio };
// };
// export default withRouter(Portfolio);
// with router is a function that gives extra functionality to your component and returns it with access to props
