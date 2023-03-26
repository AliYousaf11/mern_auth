import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  // check user login or not ?
  const navigate = useNavigate();

  // product state....
  const [addproduct, setAddProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  // add product input handler..
  const HandleAddProductInputs = (e) => {
    const { name, value } = e.target;
    setAddProduct({ ...addproduct, [name]: value });
  };

  // post product to backend....
  const HandlePostAddProduct = (e) => {
    e.preventDefault();
    const { name, price, quantity } = addproduct;

    // price & name & quantity empty?
    if (!name || !price || !quantity) {
      alert("plz fill all field");
    }
    // price valid ?
    else if (/[~`!]/.test(price)) {
      alert("plz valid price");
    }
    // quantity valid ?
    else if (/[~`!]/.test(quantity)) {
      alert("plz valid qunatity");
    }
    // add product to the backend....
    else {
      fetch("http://localhost:8000/api/addproduct", {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: JSON.stringify({
          name: name,
          price: price,
          quantity: quantity,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          alert(res.message);
          setAddProduct({ name: " ", price: " ", quantity: " " });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // after login redirect to page
  // useEffect(() => {
  //   navigate("/login");
  // }, []);

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{ color: "#F6D327" }}
                      >
                        Add Product
                      </p>
                      <form className="mx-1 mx-md-4" method="POST">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            className="fas fa-user fa-lg me-3 fa-fw"
                            style={{ color: "#F6D327" }}
                          ></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{ borderBottom: "1px solid #F6D327" }}
                          >
                            <input
                              name="name"
                              value={addproduct.name}
                              onChange={(e) => HandleAddProductInputs(e)}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Name
                            </label>
                          </div>
                        </div>

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
                              name="price"
                              value={addproduct.price}
                              onChange={(e) => HandleAddProductInputs(e)}
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Price
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
                              name="quantity"
                              value={addproduct.quantity}
                              onChange={(e) => HandleAddProductInputs(e)}
                              type="text"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Quantity
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            className="fas fa-image fa-lg me-3 fa-fw"
                            style={{ color: "#F6D327" }}
                          ></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{ borderBottom: "1px solid #F6D327" }}
                          >
                            <input
                              type="file"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            style={{ color: "#F6D327" }}
                            onClick={HandlePostAddProduct}
                            type="button"
                            className="btn btn-lg"
                          >
                            Add New
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
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
