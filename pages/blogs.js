import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import { useGetUser } from "@/actions/user";

const Blogs = () => {
    const { data, error, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1> Blogs Page</h1>
            </BasePage>
        </BaseLayout>
    );
};

export default Blogs;
