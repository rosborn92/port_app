import useSWR from "swr";

export const fetcher = (url) =>
    fetch(url).then(async (res, rej) => {
        const result = await res.json();

        if (res.status !== 200) {
            return rej(result);
        } else {
            return result;
        }
    });
// fetch(url) is what determines the data that gets returned
// can be replaced with axios call, etc. if wanted

// export const useGetData = (path) => {
//     const { data, error, ...rest } = useSWR(path, fetcher);
//     return { data, error, loading: !data && !error, ...rest };
// };
// // Get Posts
// export const useGetPosts = () => {
//     const { data, error, ...rest } = useSWR("/api/v1/posts", fetcher);
//     return { data, error, loading: !data && !error, ...rest };
// };
// // Get Post by ID
// export const useGetPostById = (id) => {
//     const { data, error, ...rest } = useSWR(
//         id ? `/api/v1/posts/${id}` : null,
//         fetcher
//     );
//     return { data, error, loading: !data && !error, ...rest };
// };

// General Fetch Function - version 2
// Client-Side Rendering

// export const useGetData = (url) => {
//     const [data, setData] = useState();
//     const [error, setError] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchData() {
//             const res = await fetch(url);
//             const result = await res.json();

//             if (res.status !== 200) {
//                 setError(result);
//             } else {
//                 setData(result);
//             }
//             setLoading(false);
//         }

//         url && fetchData();
//     }, [url]);
//     return { data, error, loading };
// };

// Specific fetching (posts) - version 1

// export const useGetPosts = () => {
//     const [posts, setPosts] = useState([]);
//     const [error, setError] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function getPosts() {
//             const res = await fetch("/api/v1/posts");
//             const result = await res.json();

//             if (res.status !== 200) {
//                 setError(result);
//             } else {
//                 setPosts(result);
//             }
//             setLoading(false);
//         }

//         getPosts();
//     }, []);
//     return { posts, error, loading };
// };
