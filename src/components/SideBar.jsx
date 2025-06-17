import UserList from './UserList';

export default function SideBar({ kullanicilar }) {
  return (
    <div className="side-container">
      <h2>Users</h2>
      <UserList users={kullanicilar} />
    </div>
  );
}
