import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { newupdateUser } from "../Features/userSlice";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateuser, setupdateUser] = useState();
  const users = useSelector((state) => state.userR.user);

  useEffect(() => {
    if (id) {
      const singleuser = users.filter((single) => single.id === id);
      setupdateUser(singleuser[0]);
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newupdateUser({ id, updateuser }));
    navigate("/");
  };

  const getUserData = (e) => {
    setupdateUser({ ...updateuser, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
            value={updateuser && updateuser.name}
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
            value={updateuser && updateuser.age}
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
              checked={updateuser && updateuser.gender === "Female"}
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
              checked={updateuser && updateuser.gender === "Male"}
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
            value={updateuser && updateuser.email}
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

export default Update;
