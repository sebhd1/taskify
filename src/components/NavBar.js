import React, { useState } from "react";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            setShowModal(true);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        history.push("/");
    };

    const addTaskIcon = (
        <NavLink to="/tasks/create" className="nav-link">
            <i className="far fa-plus-square"></i> Add task
        </NavLink>
    );

    const loggedInIcons = (
        <Nav className="ml-auto">
            <NavLink to="/tasks/" className="nav-link">
                <i className="fas fa-list"></i> Tasks
            </NavLink>
            <NavLink to="/watched" className="nav-link">
                <i className="fas fa-eye"></i> Watched
            </NavLink>
            <NavLink to="/packs/" className="nav-link">
                <i className="fas fa-boxes-packing"></i> Packs
            </NavLink>
            <NavLink to="/contact" className="nav-link">
                <i className="fas fa-envelope"></i> Contact
            </NavLink>
            <NavLink to="/profiles" className="nav-link">
                <i className="fas fa-users"></i> Users
            </NavLink>
            <NavLink to="/" className="nav-link" onClick={handleSignOut}>
                <i className="fas fa-sign-out-alt"></i> Log out
            </NavLink>
            <NavLink to={`/profiles/${currentUser?.profile_id}`} className="nav-link">
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </Nav>
    );

    const loggedOutIcons = (
        <Nav className="ml-auto">
            <NavLink to="/contact" className="nav-link">
                <i className="fas fa-envelope"></i> Contact
            </NavLink>
            <NavLink to="/signin" className="nav-link">
                <i className="fas fa-sign-in-alt"></i> Log in
            </NavLink>
            <NavLink to="/signup" className="nav-link">
                <i className="fas fa-user-plus"></i> Sign up
            </NavLink>
        </Nav>
    );

    return (
        <Navbar
            expanded={expanded}
            expand="md"
            variant="light"
            className="mb-4 shadow-sm"
        >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src="" alt="taskify site logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addTaskIcon}
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink exact to="/" className="nav-link">
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Modal show={showModal} onHide={handleCloseModal} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Goodbye!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you for visiting, see you soon!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    );
};

export default NavBar;
