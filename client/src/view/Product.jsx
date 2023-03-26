import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

export const Product = () => {
  // get all products state....
  const [getallproducts, setGetAllProducts] = useState([]);

  // before page render it will fetch data from the database...
  useEffect(() => {
    fetch("http://localhost:8000/product/getproduct", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        // alert(res.message);
        setGetAllProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {getallproducts.map((product, index) => {
        return (
          <>
            <MDBCol key={index}>
              <MDBCard style={{ maxWidth: "500px" }} className="p-5 m-4">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>Name : {product.name}</MDBCardTitle>
                  <MDBCardTitle>Price : ${product.price}</MDBCardTitle>
                  <MDBCardText>
                    <MDBCardTitle>Quantity : {product.quantity}</MDBCardTitle>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </MDBCardText>
                  <MDBBtn>
                    <a className="text-reset me-3" href="#">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    Add To Card
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </>
        );
      })}
    </MDBRow>
  );
};
