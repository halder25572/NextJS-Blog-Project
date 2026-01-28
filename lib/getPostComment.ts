
export interface PostComment {
  id: number;
  body: string;
  email: string;
}

const getPostComments = async (id: string): Promise<PostComment[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);


  return res.json();
};

export default getPostComments;

