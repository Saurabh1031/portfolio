import React from 'react'
import { BoyImagelogo, Footer, FooterItem, Image, IntroContainer, Introduction, MainContainer, Navbar, NavbarItem, NavbarRight } from './portfolio-components';
import { useNavigate } from 'react-router-dom';
import logo from "../../icons/logo.svg";
import BoyImage from "../../icons/boy.svg";
import LinkedIn from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";
import Button from '@mui/material/Button';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';

export default function Portfolio() {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "rgb(90, 90, 90)" }}>
                    <Toolbar>
                        <IconButton
                            size="medium"
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
                        }} onClick={() => navigate("/projects")}>My Projects</Button>
                        <Button sx={{
                            color: "rgb(246, 145, 30)",
                            '&:hover': {
                                backgroundColor: 'rgb(246, 145, 30)', color: "#fff"
                            },
                        }}>Contact Us</Button>
                    </Toolbar>
                </AppBar>
            </Box >
            <Container sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "calc(100vh-100px)",
            }}>
                <BoyImagelogo src={BoyImage} alt="boy" />
                <IntroContainer>
                    <Typography style={{ color: "#ffffff", textAlign: "center" }} fontSize={"200%"}>
                        <b style={{ color: "rgb(246,145,30)" }}>Hey there!</b> My name is Saurabh Tiwari. <br />
                        I'm a Javascript Developer.
                    </Typography>
                </IntroContainer>

            </Container >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "29px",
                position: "absolute",
                bottom: "5px",
                width: "99vw",
            }}>
                <FooterItem src={LinkedIn} alt="linkedIn" onClick={() => window.open("https://www.linkedin.com/in/saurabh-tiwari-982418172/")} />
                <FooterItem style={{ height: "61px" }} src={github} alt="github" onClick={() => window.open("https://github.com/Saurabh1031")} />
            </Box>
        </>
    );
}