import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const GetData = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());

  };
  
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Invoice</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">TeachingLocation</th>
              <th scope="col">email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => (
              <tr>
                <th scope="row">{id+ 1}</th>
                <td>{user.Date}</td>
                <td>{user.TeachingLocation}</td>
                <td>{user.Email}</td>
                <td>
           
                 <Link class="btn btn-primary mr-2" to={`/invoiceUser/${user.id}`} >
                    View
                  </Link>
                  
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                
              
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



    </div>
  );
};

export default GetData;

// to={`/users/${user.id}`}>