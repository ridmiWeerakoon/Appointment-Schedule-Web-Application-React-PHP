import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img7 from "./images/img7.png";

export default function ListUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api6/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/user6/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div className="container-fluid"><br/>
        <Link to="/ahome">
        <img
          src={img7}
          alt="Image"
          style={{ height: "50px", width: "50px", marginRight: "-1000px" }}
        />
      </Link>
            <h1>Job Seeker Information</h1><br/>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Category</th>
                     
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.category}</td>
                          
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
