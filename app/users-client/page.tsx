"use client";

import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);


    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <ul className="space-y-4 p-4">
            {users.map(user => (
                <li key={user.id} className="border p-4 rounded-md">
                    <h3 className="text-lg font-bold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </li>
            ))}
        </ul>
    )
    
}