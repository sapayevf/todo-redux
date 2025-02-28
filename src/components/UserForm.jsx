import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/userSlice";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const UserForm = ({ editUser, setEditUser }) => {
  const dispatch = useDispatch();
  const { control, setValue } = useForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "erkak",
  });

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
      setValue("phone", editUser.phone || "");
    }
  }, [editUser, setValue]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone
    ) {
      if (editUser) {
        dispatch(updateUser(formData));
        setEditUser(null);
      } else {
        dispatch(addUser(formData));
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "erkak",
      });
      setValue("phone", "");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {editUser ? "Foydalanuvchini Tahrirlash" : "Foydalanuvchi Qo‘shish"}
      </h2>

      {/* Ism */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Ism</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
          placeholder="Ism..."
        />
      </div>

      {/* Familiya */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Familiya</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
          placeholder="Familiya..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Telefon</label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: { value: true, message: "Telefon kiritish majburiy!" },
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"uz"}
              masks={{ uz: "(..) ...-..-.." }}
              inputClass="w-full p-4 border rounded mt-1 focus:ring focus:ring-blue-300"
              containerClass="w-full"
              inputStyle={{ width: "100%" }}
              onChange={(phone) => setFormData({ ...formData, phone })}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
          placeholder="Email..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Jins</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
        >
          <option value="erkak">Erkak</option>
          <option value="ayol">Ayol</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        {editUser ? "Yangilash" : "Qo‘shish"}
      </button>
    </form>
  );
};

export default UserForm;
