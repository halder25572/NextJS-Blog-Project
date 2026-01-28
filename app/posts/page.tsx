import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";




const PostsPage = async () => {
    const posts = await getAllPosts();
    // console.log(posts);

    return (
        <div className="mt-6">
            <h1 className="mb-10">All Posts</h1>

            <ul>
                {
                    posts.map(post => <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default PostsPage;