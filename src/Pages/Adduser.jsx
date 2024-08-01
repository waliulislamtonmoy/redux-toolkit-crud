import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Features/userSlice";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
  });

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(users));
    navigate("/");
  };

  return (
    <div>
      <div className="px-3 py-3 flex justify-center">
        <h1 className="text-3xl font-bold uppercase">Add User</h1>
      </div>

      <form className="m-7" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name :
          </label>
          <input
            name="name"
            onChange={getUserData}
            value={users.name}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Age :
          </label>
          <input
            name="age"
            onChange={getUserData}
            value={users.age}
            type="number"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="age"
            required
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Gender :
          </label>
          <div className="flex items-center mb-4">
            <input
              name="gender"
              onChange={getUserData}
              value="Female"
              id="gender"
              type="radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              htmlFor="gender"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input
              name="gender"
              onChange={getUserData}
              value="Male"
              id="default-radio-2"
              type="radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              htmlFor="male"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Male
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email :
          </label>
          <input
            onChange={getUserData}
            value={users.emails}
            name="email"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email"
            required
          />
        </div>
        <button
          type="submit"
          className="px-2 py-2 bg-green-400 rounded w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
