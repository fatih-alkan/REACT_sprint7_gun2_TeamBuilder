export default function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="user-box p-2 border rounded mb-2 bg-light">
          <p>
            <strong>{user.name}</strong>
          </p>
          <p>Project: {user.project}</p>
          <p>Task: {user.task}</p>
        </div>
      ))}
    </div>
  );
}
