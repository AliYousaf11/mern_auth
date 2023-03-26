import React from "react";
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
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <MDBCol>
        <MDBCard style={{ maxWidth: "500px" }} className="p-5 m-4">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/041.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
      <MDBCol>
        <MDBCard style={{ maxWidth: "500px" }} className="p-5 m-4">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
      <MDBCol>
        <MDBCard style={{ maxWidth: "500px" }} className="p-5 m-4">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/042.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
      <MDBCol>
        <MDBCard style={{ maxWidth: "500px" }} className="p-5 m-4">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/043.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
      <MDBCol>
        <MDBCard style={{ maxWidth: "500px" }} className="p-5 m-4">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
    </MDBRow>
  );
};
