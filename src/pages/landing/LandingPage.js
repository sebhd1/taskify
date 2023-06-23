import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/LandingPage.module.css";
import appStyles from "../../App.module.css";
import landingImage from "../../assets/landing-image.jpg";

const LandingPage = () => {
    return (
        <Container className="text-center mt-5">
            <Row className="justify-content-center align-items-center">
                <Col sm={12} md={6} lg={4}>
                    <Card className="border-0 shadow-lg">
                        <Card.Body>
                            <Card.Title>
                                <h1 className="mb-4">Welcome to Taskify!</h1>
                            </Card.Title>
                            <Card.Text className="font-weight-bold">
                                Taskify is a productivity management site.
                                <br />
                                <br />
                                Are you ready to create and complete some tasks?
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <div className="d-flex justify-content-around">
                                <Link to="/signin">
                                    <Button
                                        className={`btn ${appStyles.Button} mb-3`}
                                    >
                                        Log in
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button
                                        className={`btn ${appStyles.Button} mb-3`}
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={8}>
                    <img
                        src={landingImage}
                        alt="Taskify landing"
                        className={`img-fluid ${styles.LandingImage}`}
                    />
                </Col>
            </Row>
            <Container className={styles.FooterWidth}></Container>
        </Container>
    );
};

export default LandingPage;
