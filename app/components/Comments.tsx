

interface CommentsProps {
  promise: Promise<Comment[]>;
}

const Comments = async ({ promise }: CommentsProps) => {
  const comments = await promise;

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold mb-2 text-orange-400">
        Comments
      </h1>

      <ul>
        {comments.map((comment) => (
          <li
            key={comment.data}
            className="mb-2 text-orange-500"
          >
            {comment.data.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
