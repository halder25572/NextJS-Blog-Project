import Comments from "@/app/components/Comments";
import getPostComments from "@/lib/getPostComment";


const PostPage = () => {
    const commentsPromise = getPostComments(id)
    const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
            <Comments />
        </div>
    );
};

export default PostPage;