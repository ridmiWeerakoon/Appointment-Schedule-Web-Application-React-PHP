import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img7 from "./images/img7.png";

export default function AppoinmentList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div className="container-fluid"><br/>
        <Link to="/clogin">
        <img
          src={img7}
          alt="Image"
          style={{ height: "50px", width: "50px", marginRight: "-1000px" }}
        />
      </Link>
            <h1>Appoinment List</h1><br/>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Consultant Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.date}</td>
                            <td>{user.time}</td>
                            <td>{user.c_name}</td>
                            <td>
                                <Link to={`/user/${user.id}/edit`} className="btn btn-primary btn-sm" style={{ marginRight: "10px" }}>ReShedule</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">Cancel</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
