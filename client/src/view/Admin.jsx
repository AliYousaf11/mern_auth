import React, { useEffect } from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  // check user login or not?
  const navigate = useNavigate();

  useEffect(() => {
    //gettoken from the localstorage...
    let token = localStorage.getItem("usertoken");
    console.log("admin page  set token to header-> : " + token);

    // token send to server-side....
    fetch("http://localhost:8000/admin/admin", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        // after recevied server response signup all feilds empty...
        if (res.status === 200) {
          alert("200", res.message);
          navigate("/admin");
        } else {
          navigate("/login");
          // alert("404", res.message);
        }
      })
      .catch(() => navigate("/login"));
  }, []);

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
      <MDBTableBody>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">John Doe</p>
                <p className="text-muted mb-0">john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Software engineer</p>
            <p className="text-muted mb-0">IT department</p>
          </td>
          <td>
            <MDBBadge color="success" pill>
              Active
            </MDBBadge>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-trash"></i>
            </a>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-edit"></i>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Alex Ray</p>
                <p className="text-muted mb-0">alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Consultant</p>
            <p className="text-muted mb-0">Finance</p>
          </td>
          <td>
            <MDBBadge color="primary" pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-trash"></i>
            </a>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-edit"></i>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Kate Hunington</p>
                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
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
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-trash"></i>
            </a>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-edit"></i>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">John Doe</p>
                <p className="text-muted mb-0">john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Software engineer</p>
            <p className="text-muted mb-0">IT department</p>
          </td>
          <td>
            <MDBBadge color="success" pill>
              Active
            </MDBBadge>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-trash"></i>
            </a>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-edit"></i>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Alex Ray</p>
                <p className="text-muted mb-0">alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Consultant</p>
            <p className="text-muted mb-0">Finance</p>
          </td>
          <td>
            <MDBBadge color="primary" pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-trash"></i>
            </a>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-edit"></i>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Kate Hunington</p>
                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
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
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-trash"></i>
            </a>
          </td>
          <td>
            <a className="text-reset me-3" href="#">
              <i className="fas fa-edit"></i>
            </a>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};
