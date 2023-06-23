import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Error from "../assets/404.png";

/*
  Returns a 404 page with a button
  to return the user to the main page
*/
const PageNotFound = () => {
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={12}>
        <Container>
          <Image
            src={Error}
            alt="Page not found image"
          />
          <div>
            <Link to="/">
              <Button>
                Return Home
              </Button>
            </Link>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default PageNotFound;
