import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [editUser, setEditUser] = useState(null);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <UserForm editUser={editUser} setEditUser={setEditUser} />
      <UserList setEditUser={setEditUser} />
    </div>
  );
};

export default App;
