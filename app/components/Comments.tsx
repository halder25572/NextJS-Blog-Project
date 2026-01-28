export interface PostComment {
  id: number;
  body: string;
  email: string;
}

interface CommentsProps {
  promise: Promise<PostComment[]>;
}

const Comments = async ({ promise }: CommentsProps) => {
  const comments = await promise;
  console.log("comments", comments);

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold mb-2 text-orange-400">
        Comments
      </h1>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
