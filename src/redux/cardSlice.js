import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const initialState = {
  users: loadFromLocalStorage(),
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ id: Date.now(), ...action.payload });
      saveToLocalStorage(state.users);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      saveToLocalStorage(state.users);
    },
    updateUser: (state, action) => {
      const { id, firstName, lastName, email, gender } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.email = email;
        existingUser.gender = gender;
        existingUser.phone = phone;

        saveToLocalStorage(state.users);
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
