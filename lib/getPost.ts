
export interface Post {
    id: string;
    title: string;
    body?: string;
}

const getPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return res.json();
};

export default getPost;

