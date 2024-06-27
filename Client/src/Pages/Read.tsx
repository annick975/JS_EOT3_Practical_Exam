import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../Styles/Users.css";

function Home() {
  // VIEW USERS FUNCTIONALITY
  const [userData, setUserData] = useState(null);

  const viewUsers = async () => {
    try {
      const viewedUsers = await axios.get("http://localhost:3006/users");
      setUserData(viewedUsers.data);
    } catch (error) {
      console.error("Error while retrieving guards' data!", error);
    }
  };

  return (
    <>
      
      <button type="button" onClick={viewUsers}>
        View Users
      </button>
      

      {userData && (
        <div className="userList">
          <h2>User List</h2>

          <table>
            <thead>
              <tr>
                <th>
                  N<sup>o</sup>
                </th>

                <th>Title</th>
                <th> Firstname</th>
                <th> LastName</th>
                <th> Position</th>
                <th> Company</th>
                <th> BusinessArena</th>
                <th>Employees</th>
                <th> Street</th>
                <th> Info</th>
                <th>ZipCode</th>
                <th> Place</th>
                <th> Country</th>
                <th>Code</th>
                <th>PhoneNbr</th>
                <th> Email</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.Title}</td>
                  <td>{user.Firstname}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Position}</td>
                  <td>{user.Company}</td>
                  <td>{user.BusinessArena}</td>
                  <td>{user.Employees}</td>
                  <td>{user.Street}</td>
                  <td>{user.Info}</td>
                  <td>{user.ZipCode}</td>
                  <td>{user.Place}</td>
                  <td>{user.Country}</td>
                  <td>{user.Code}</td>
                  <td>{user.PhoneNbr}</td>
                  <td>{user.Email}</td>
                  <td>
                    <Link to="/updateUsers">
                      <button>Edit</button>
                    </Link>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Home;
