import { useEffect, useState } from "react";
import { Adddata } from "./adddata";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    setUsers(Adddata);
  };

  useEffect(fetchData, []);

  return (
    <div className="container-fluid ">
      <div className="pl=4">Create User here</div>
      <div className="row ">
    
        <div className="col-3 mx-auto mb-4">
          <label></label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
          />
        </div>
        <div className="col-3 mx-auto mb-4">
          <label></label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="lastname"
         
          />
        </div>
        <div className="col-3 mx-auto mb-4">
          <label></label>
          <input
            type="text"
            className="form-control"
            id="position"
            placeholder="position"
            
          />
        </div>
        <div>
          <table className="table table-white table-striped text-center table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="pt-5">
              {users.map((user) => (
                <tr key={user.id} className="table-row">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.position}</td>
                  <td>Delete</td>
                </tr>
              ))}
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
