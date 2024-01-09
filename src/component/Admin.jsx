import { useEffect, useState } from "react";
import { mockEmployees } from "./mockEmployees";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    setUsers(mockEmployees);
  };

  useEffect(fetchData, []);

  return (
    <div className="container-fluid ">
      <div className="row ">
        {/* <div>input</div> */}
        {/* <div className="col-12 mx-auto pt-5 pb-5 text-center">
          <h1 className="display-1">THIS IS admin page</h1>
        </div> */}
        <div className="col-3 mx-auto mb-4">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            // value={username}
            // onChange={onchangeUsername}
          />
        </div>
        <div className="col-3 mx-auto mb-4">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="lastname"
            // value={username}
            // onChange={onchangeUsername}
          />
        </div>
        <div className="col-3 mx-auto mb-4">
          <label>Position</label>
          <input
            type="text"
            className="form-control"
            id="position"
            placeholder="position"
            // value={username}
            // onChange={onchangeUsername}
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
              {/* <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
