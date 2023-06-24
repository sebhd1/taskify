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
                            <Row>
                                <Col>
                                    <p>
                                        Taskify is a powerful task manager app that helps you stay organized
                                        and productive. It provides a simple and intuitive interface to manage
                                        your tasks effectively.
                                    </p>
                                </Col>
                            </Row>
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
            <Row className="mt-5">
                <Col md={6}>
                    <h2>Features</h2>
                    <ul>
                        <li>Create tasks with titles, descriptions, and due dates</li>
                        <li>Organize tasks into categories or projects</li>
                        <li>Set task priorities and track their progress</li>
                        <li>Assign tasks to team members and collaborate seamlessly</li>
                        <li>Receive notifications and reminders for upcoming deadlines</li>
                        <li>Generate reports and visualize task statistics</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <h2>Get Started</h2>
                    <p>
                        Sign up for an account to start managing your tasks with Taskify. It's
                        easy and free!
                    </p>
                    <Button variant="primary" href="/signup">
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
