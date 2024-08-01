import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "../Features/userSlice";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { is_Loading, error, user, searchdata } = useSelector(
    (state) => state.userR
  );
  console.log(searchdata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleUserDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div>
      {is_Loading && <p>Data Loading</p>}
      {error && <p>No Data Found.Error in data Fetching</p>}

      <div className="relative overflow-x-auto">
        <NavLink to="adduser/">
          <button className="px-3 py-3 bg-green-400 rounded m-3 ">Add</button>
        </NavLink>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((data, i) => {
                return (
                  <>
                    <tr className="bg-white border-b " key={i}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {data.name}
                      </th>
                      <td className="px-6 py-4">{data.age}</td>
                      <td className="px-6 py-4">{data.gender}</td>
                      <td className="px-6 py-4">{data.email}</td>
                      <td className="px-6 py-4">
                        <NavLink
                          to={`update/${data.id}`}
                          className="px-2 py-2 bg-cyan-300 rounded m-1 text-black"
                        >
                          Update
                        </NavLink>
                        <a
                          href="/"
                          className="px-2 py-2 bg-red-500 rounded m-1 text-white cursor-pointer"
                          onClick={() => handleUserDelete(data.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
