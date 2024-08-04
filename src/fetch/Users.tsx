import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<{ name: string; id: string }[]>([]);
  const [error, setError] = useState<null | string>(null);
  const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) =>
        setUsers(
          res.map((user: any) => ({
            name: user.name,
            id: user.id,
          }))
        )
      )
      .catch(() => setError("Error fetching users"));
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1 title="users-header">users</h1>
      {error && <p title="error-message">{error}</p>}
      {users.length > 0 &&
        users.map((user) => <li key={user.id}>name : {user.name}</li>)}
    </div>
  );
};

export default Users;
