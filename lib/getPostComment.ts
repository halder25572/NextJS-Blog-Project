export interface Comment {
  id: number;
  body: string;
}

const getPostComments = async (id: string): Promise<Comment[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  return res.json();
};

export default getPostComments;

