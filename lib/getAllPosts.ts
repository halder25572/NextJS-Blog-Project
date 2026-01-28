
export interface Post {
  id: string;
  title: string;
  body?: string;
}


export default async function getAllPosts(): Promise<Post[]> {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

if(!result.ok){
  throw new Error("There was an error fetching posts");
}

  return result.json();
}
