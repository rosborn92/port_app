import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import BasePage from "@/components/shared/BasePage";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";
import PortfolioCard from "@/components/shared/PortfolioCard";
import { Row, Col } from "reactstrap";

const Portfolios = ({ portfolios }) => {
    // State
    const { data: userData, loading: loadingUser } = useGetUser();
    const router = useRouter();
    // import { useGetData } from "@/actions";
    // const { data, error, loading } = useGetData("/api/v1/portfolios");

    return (
        <BaseLayout user={userData} loading={loadingUser}>
            <BasePage className="portfolio-page" header="Portfolios">
                <Row>
                    {portfolios.map((portfolio) => (
                        <Col
                            key={portfolio._id}
                            onClick={() => {
                                router.push(
                                    "/portfolios/[id]",
                                    `/portfolios/${portfolio._id}`
                                );
                            }}
                            md="4"
                        >
                            <PortfolioCard portfolio={portfolio} />
                        </Col>
                    ))}
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

// this function is called during build time (server-side)
export async function getStaticProps() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    return {
        props: { portfolios },
    };
}

export default Portfolios;
