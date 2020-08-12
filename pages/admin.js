import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";

const Admin = ({ user, loading }) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>ADMIN PAGE...{user && user.name}</h1>
            </BasePage>
        </BaseLayout>
    );
};

// specify which role can access the page
// The two functions below are the same
// export default withAuth(Admin, "admin");
export default withAuth(Admin)("admin");
