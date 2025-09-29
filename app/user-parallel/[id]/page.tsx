type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Album = {
    userId: number;
    id: number;
    title: string;
}

async function getUserPosts(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.json();
}

async function getUserAlbums(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return res.json();
}


export default async function UserProfile({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const postsData = getUserPosts(id);
    const albumsData = getUserAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumsData]);
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 w-full">
                <h2 className="text-xl font-bold mb-4">Posts</h2>
                <ul className="space-y-4">
                    {posts.map((post: Post) => (
                        <li key={post.id} className="p-4 border rounded shadow-sm bg-white">
                            <h3 className="font-semibold text-lg">{post.title}</h3>
                            <p className="text-gray-700">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:w-1/2 w-full">
                <h2 className="text-xl font-bold mb-4">Albums</h2>
                <ul className="space-y-4">
                    {albums.map((album: Album) => (
                        <li key={album.id} className="p-4 border rounded shadow-sm bg-white">
                            <h3 className="font-semibold text-lg">{album.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}