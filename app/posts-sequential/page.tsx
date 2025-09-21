import { Author } from "./author";


type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostsSequential() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();

    const filteredPosts = posts.filter(post => post.userId % 10 === 1);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Posts</h1>
        <div className="flex flex-col gap-4">
        <ul className="space-y-4 p-4">
            {filteredPosts.map(post => (
                <li key={post.id} className="border p-4 rounded-md">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.body}</p>
                    <Author userId={post.userId} />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}