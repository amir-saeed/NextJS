"use client";

import { trpc } from "@/utils/trpc";

export default function UserList() {
  const { data: users, isLoading, refetch } = trpc.listUsers.useQuery();
  const createUser = trpc.createUser.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  if (isLoading) return <div className="text-center text-gray-600">Loading...</div>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User List</h2>

      <ul className="space-y-2 mb-6">
        {users?.map((user) => (
          <li
            key={user.id}
            className="p-2 bg-gray-100 rounded-md shadow-sm text-gray-700"
          >
            {user.name}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          createUser.mutate(
            { name: "Alice" },
            {
              onSuccess: (newUser) => alert(`Created user: ${newUser.name}`),
            }
          )
        }
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200"
      >
        Create User
      </button>
    </div>
  );
}
