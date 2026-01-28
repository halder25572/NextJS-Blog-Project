import Link from "next/link";


const BlogsPage = () => {
    const blogs = [
        {
            id: "1",
            title: "Blog Title - 1",
            description: "Blog Description - 1"
        },
        {
            id: "2",
            title: "Blog Title - 2",
            description: "Blog Description - 2"
        },
        {
            id: "3",
            title: "Blog Title - 3",
            description: "Blog Description - 3"
        }
    ]
    return (
        <div className="mt-10">
            <h1>This is blogs page</h1>
            <div className="mt-5">
                {
                    blogs.map(blog => {
                        return <li key={blog.id}>
                            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </li>
                    })
                }
            </div>
        </div>
    );
};

export default BlogsPage;