
interface BlogPageTypes {
    params: {
        id: string;
    };
}

const BlogPage = async ({ params }: BlogPageTypes) => {
    console.log(params);
    const {id} = await params;
    return (
        <div className="">
            <h1>The blog id is: {id}</h1>
        </div>
    )
};

export default BlogPage;