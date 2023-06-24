import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../../assets/landing-image.jpg";
import taskImage from '../../assets/task-management.png';

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
                                    <Button className='mb-3'
                                    >
                                        Log in
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button
                                        className='mb-3'
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
                        className='img-fluid'
                    />
                </Col>
            </Row>
            <Container></Container>
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
                    <img src={taskImage} alt="taskImage" className='img-fluid' />
                </Col>
                <Col md={6}>
                    <section id="how-it-works" className="bg-light py-5">
                        <div className="container">
                            <h2 className="text-center mb-4">How It Works</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Create Tasks</h4>
                                    <p>Create tasks and assign them to team members. Set due dates and add relevant
                                        details.</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Collaborate</h4>
                                    <p>Collaborate with your team members by commenting on tasks and sharing
                                        updates.</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>Track Progress</h4>
                                    <p>Track task progress and receive notifications to ensure tasks are completed on
                                        time.</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Monitor Performance</h4>
                                    <p>Analyze team performance with built-in analytics and improve productivity.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="mt-5">
                        <h2>Get Started</h2>
                        <p>
                            Sign up for an account to start managing your tasks with Taskify. It's
                            easy and free!
                        </p>

                        <Button variant="primary" href="/signup" className="mb-5">
                            Sign Up
                        </Button>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
