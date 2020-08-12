import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";
import PortfolioForm from "@/components/shared/PortfolioForm";
import { Row, Col } from "reactstrap";
import { createPortfolio } from "@/actions/portfolios";

const CreatePortfolio = ({ user, loading }) => {
    const _createPortfolio = (data) => {
        createPortfolio(data);
    };

    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage header="Create Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm onSubmit={_createPortfolio} />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

export default withAuth(CreatePortfolio)("admin");
