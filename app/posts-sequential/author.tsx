type Author = {
    id: number;
    name: string;
}

export async function Author({ userId }: { userId: number }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const author: Author = await response.json();
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{author.name}</h1>
        </div>
    )
}