import React, { useState } from "react";

export const Login = () => {
  // user sign up state handle....
  const [userlogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  // user signup handleInput....
  const HandleUserLoginInputs = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userlogin, [name]: value });
  };

  // user signup details post.....
  const loginDetails = (e) => {
    e.preventDefault();
    const { email, password } = userlogin;

    // check empty fields?
    if (!email || !password) {
      alert("plz fill all field");
    }
    // check email valid or not ?
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid Email format");
    }
    // check password & confirm password length.....
    else if (password.length < 6) {
      alert("Password must be length 6 ");
    }
    // after validation user credential send to server side...
    else {
      // alert("Registeration pending.....");
      fetch("http://localhost:8000/api/login", {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          // after recevied token and user from server response signup all feilds empty...
          localStorage.setItem("usertoken", res.data.token);
          setUserLogin({ email: " ", password: " " });
          alert(res.message);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{ color: "#F6D327" }}
                      >
                        Login
                      </p>

                      <form className="mx-1 mx-md-4" action="POST">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            className="fas fa-envelope fa-lg me-3 fa-fw"
                            style={{ color: "#F6D327" }}
                          ></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{ borderBottom: "1px solid #F6D327" }}
                          >
                            <input
                              name="email"
                              value={userlogin.email}
                              onChange={(e) => HandleUserLoginInputs(e)}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            className="fas fa-lock fa-lg me-3 fa-fw"
                            style={{ color: "#F6D327" }}
                          ></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{ borderBottom: "1px solid #F6D327" }}
                          >
                            <input
                              name="password"
                              value={userlogin.password}
                              onChange={(e) => HandleUserLoginInputs(e)}
                              type="new-password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                          style={{ color: "#F6D327" }}
                        >
                          <button
                            onClick={loginDetails}
                            type="button"
                            className="btn btn-lg"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
