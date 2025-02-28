import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";

const UserList = ({ setEditUser }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="mt-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Foydalanuvchilar</h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">
          Hali hech qanday foydalanuvchi qo‘shilmagan.
        </p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
            >
              <div>
                <p className="font-medium">
                  <b>Ism: </b> 
                  {user.firstName}
                </p>
                <p>
                  <b>Familiya: </b>
                  {user.lastName}
                </p>
                <p>
                    <b>Telefon: </b> {user.phone}
                </p>
                <p className="font-medium">
                  <b>Email: </b>
                  {user.email}
                </p>
                <p>
                  <b>Jins: </b>
                  {user.gender}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setEditUser(user)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Tahrirlash
                </button>
                <button
                  onClick={() => dispatch(removeUser(user.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  O‘chirish
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
