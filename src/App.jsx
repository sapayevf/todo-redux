import { useState } from "react";
import UserForm from "./components/CardForm";
import UserList from "./components/CardList";

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
