import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  // check either login or not
  const navigate = useNavigate();

  // get all users....
  const [getallusers, setGetAllUsers] = useState([]);

  // before page render it will fetch data from the database...
  useEffect(() => {
    fetch("http://localhost:8000/user/getusers", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setGetAllUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  //   navigate("/login");
  // }, []);
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Position</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      {getallusers.map((user, index) => {
        return (
          <>
            <MDBTableBody>
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{user.name}</p>
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">Designer</p>
                  <p className="text-muted mb-0">UI/UX</p>
                </td>
                <td>
                  <MDBBadge color="warning" pill>
                    Awaiting
                  </MDBBadge>
                </td>
                <td>Senior</td>
                <td>
                  <MDBBtn color="link" rounded size="sm">
                    Edit
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </>
        );
      })}
    </MDBTable>
  );
};
