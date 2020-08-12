import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import { authorizeUser, withAuth } from "@/utils/auth0";

const AdminSSR = ({ user, title }) => {
    return (
        <BaseLayout user={user} loading={false}>
            <BasePage>
                <h1>I am AdminSSR{user && user.name}</h1>
            </BasePage>
        </BaseLayout>
    );
};

const getTitle = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({ title: "My new Title" });
        }, 500);
    });
};

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
    const title = await getTitle();
    return title;
})("admin");

export default AdminSSR;
