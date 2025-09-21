

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map(user => (
                <li key={user.id} className="border p-4 rounded-md">
                    <h3 className="text-lg font-bold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-500">{user.phone}</p>
                </li>
            ))}
        </ul>
    )

}