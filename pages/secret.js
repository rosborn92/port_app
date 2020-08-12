import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
// import { useRouter } from "next/router";
import withAuth from "@/hoc/withAuth";

const Secret = ({ user, loading }) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>I am SECRET...</h1>
            </BasePage>
        </BaseLayout>
    );
};

export default withAuth(Secret)();
