import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const params = useParams();
  const keyword = params.keyword;
  console.log(keyword);

  const getUser = async (keyword = " ") => {
    const { data } = await axios.get(
      `http://localhost:5050/api/user?keyword=${keyword}`
    );
    setUsers(data);
  };

  useEffect(() => {
    getUser(keyword);
  }, [keyword]);

  return (
    <>
      <h1>User List</h1>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
