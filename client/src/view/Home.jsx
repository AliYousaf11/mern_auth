import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export const Home = () => {
  return (
    <MDBCard style={{ maxWidth: "1300px" }} className="p-5 m-5">
      <MDBRow className="g-0">
        <MDBCol md="5">
          <MDBCardImage
            style={{ maxWidth: "550px" }}
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="5" className="p-1 m-5">
          <MDBCardBody>
            <MDBCardTitle>Wellcome to Home</MDBCardTitle>
            <MDBCardText>
              <small className="text-muted">We are glad to see you here</small>
            </MDBCardText>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              hic expedita sed corrupti provident recusandae accusantium
              deserunt illum. Cumque similique neque autem, rem expedita
              voluptatibus. Culpa molestiae quia qui maxime.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};
