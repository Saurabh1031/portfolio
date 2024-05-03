//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { Image, Navbar, NavbarItem, NavbarRight } from '../portfolio/portfolio-components'
import logo from "../../icons/logo.svg";
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Card, CardContainer, CardFooter, Container, DeleteImg, FooterItem, Heading, ImageCard, Img, Title, WhiteCircle } from './my-projects-components';
import 'reactjs-popup/dist/index.css';
import deleteIcon from "../../icons/delete.svg";
import db from '../../firebase';
import { collection, addDoc, getDocs, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import CardContainerComponent from '../../components/card/card-container';
export default function Projects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [showAddProjectModal, setShowAddProjectModal] = useState(false);
    const [title, setTitle] = useState("");
    const [sourceLink, setSourceLink] = useState("");
    const [deployedLink, setDeployedLink] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [error, setError] = useState("");
    const [loader, setLoader] = useState<boolean>(false);
    const [deleteProjectModal, setDeleteProjectModal] = useState<boolean>(false);
    const [projectId, setProjectId] = useState<any>("");
    const [password, setPassword] = useState<any>("");
    useEffect(() => {
        fetchProjectsFromDB();
    }, []);
    const fetchProjectsFromDB = () => {
        try {
            setLoader(true);

            // Create a reference to the "projects" collection
            const projectsCollection = collection(db, 'projects');

            //onSnapshot is called automatically, whenever there is a change in Database
            const unsubscribe = onSnapshot(projectsCollection, (snapshot) => {
                //  console.log("onSnapshot() is called automatically");
                const fetchedProjects = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProjects(fetchedProjects);
                setLoader(false);
            });

            // Cleanup the listener when the component unmounts or on error
            return () => unsubscribe();
        } catch (error) {
            setLoader(false);
            console.error('Error getting documents:', error);
        }
    };
    const addProjectToDB = async (newProject) => {
        try {
            const usersCollection = collection(db, 'projects');
            //const newUser = { name: 'John Doe', email: 'john@example.com' };
            const docRef = await addDoc(usersCollection, newProject);
            console.log('Document written with ID:', docRef.id);

        } catch (error) {
            console.error('Error adding document:', error);
        }
    };
    const deleteProjectFromDB = async (projectId) => {
        try {
            setDeleteProjectModal(false);
            // Create a reference to the specific project document
            const projectRef = doc(db, 'projects', projectId);

            // Delete the document
            await deleteDoc(projectRef);
            setProjectId("");
            setPassword("");
            setError("");
        } catch (error) {
            console.error('Error deleting document:', error);
            setProjectId("");
            setDeleteProjectModal(false);
            setPassword("");
            setError("");
        }
    };
    const addProjectHandler = () => {
        if (title && sourceLink && deployedLink && imageLink && (password == "Saurabh@1031")) {
            const newProject = {
                title: title,
                imgSrc: imageLink,
                sourceCode: sourceLink,
                deployedLink: deployedLink
            }
            // setProjects([...projects, newProject]);
            addProjectToDB(newProject);
            setTitle("");
            setSourceLink("");
            setDeployedLink("");
            setImageLink("");
            setError("");
            setPassword("");
            setShowAddProjectModal(false);
        } else {
            setError("Incomplete details or incorrect password!");
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "rgb(90, 90, 90)" }}>
                    <Toolbar>
                        <IconButton
                            size="md"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 0 }}
                        >
                            <AlternateEmailTwoToneIcon />
                        </IconButton>
                        <Typography variant="h5" fontWeight={600} component="div" color="#fff" sx={{ flexGrow: 1 }}>
                            Portfolio
                        </Typography>
                        <Button sx={{
                            color: "rgb(246, 145, 30)",
                            '&:hover': {
                                backgroundColor: 'rgb(246, 145, 30)', color: "#fff"
                            },
                        }} onClick={() => setShowAddProjectModal(true)}>Add Project</Button>
                        <Button sx={{
                            color: "rgb(246, 145, 30)",
                            '&:hover': {
                                backgroundColor: 'rgb(246, 145, 30)', color: "#fff"
                            },
                        }} onClick={() => { navigate("/") }}>Home</Button>
                    </Toolbar>
                </AppBar>
            </Box >
            <Container>
                <Typography
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        height: "20%"
                    }}
                    style={{ color: 'rgb(246,145,30' }}
                    fontSize={40}
                    fontWeight={500}
                >
                    MY PROJECTS
                </Typography>
                <CardContainer>
                    {loader ? (
                        <Typography fontSize={30} style={{ color: "#fff" }}>
                            Fetching Projects...
                        </Typography>
                    ) : projects.length > 0 ? (
                        projects.map((project: any) => (
                            <CardContainerComponent key={project.id} project={project} />
                        ))
                    ) : (
                        <Typography fontSize={30} style={{ color: "#fff" }}>
                            No Projects found!
                        </Typography>
                    )}
                </CardContainer>
            </Container>
            {/* Add Project Modal */}
            <Modal
                show={showAddProjectModal}
                onHide={() => { setShowAddProjectModal(false); setError(""); setPassword(""); }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label name='title'>Title</label> <br />
                    <input type='text' name="title" onChange={(e) => setTitle(e.target.value)} /> <br />
                    <label name='source'>Source Code URL</label> <br />
                    <input type='text' name="source" onChange={(e) => setSourceLink(e.target.value)} /> <br />
                    <label name='deploy'>Deployed URL</label> <br />
                    <input type='text' name="deploy" onChange={(e) => setDeployedLink(e.target.value)} /> <br />
                    <label name='image'>Display image URL</label> <br />
                    <input type='text' name="image" onChange={(e) => setImageLink(e.target.value)} /> <br />
                    <label name='password'>Password</label> <br />
                    <input type='text' name="password" onChange={(e) => setPassword(e.target.value)} /> <br />
                    {error && <div style={{ color: "red" }}>{error}</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowAddProjectModal(false); setError(""); setPassword(""); }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addProjectHandler}>ADD</Button>
                </Modal.Footer>
            </Modal >
            {/* Delete Project Modal */}
            <Modal
                show={deleteProjectModal}
                onHide={() => { setDeleteProjectModal(false); setProjectId(""); setPassword(""); setError(""); }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this Project? <br />
                    <label name='password'>Password</label> <br />
                    <input type='text' name="password" onChange={(e) => setPassword(e.target.value)} /> <br />
                    {error && <div style={{ color: "red" }}>{error}</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setDeleteProjectModal(false); setProjectId(""); setPassword(""); setError(""); }}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => {
                        if (password == "Saurabh@1031")
                            deleteProjectFromDB(projectId)
                        else {
                            setError("Incorrect Password!");
                        }
                    }}>Yes, Delete</Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}