import Comments from "@/app/components/Comments";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import { Suspense } from "react";

interface PostPageProps {
    params: {
        id: string;
    };
}

const PostPage = async ({ params }: PostPageProps) => {
    console.log("Params", params);
    const { id } = params;

    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);
    const post = await postPromise;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <hr />

            <Suspense fallback={<h1>Loading Comments...</h1>}>
                <Comments promise={commentsPromise} />
            </Suspense>
        </div>
    );
};

export default PostPage;
