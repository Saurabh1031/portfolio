import React from 'react'
import { BoyImagelogo, Footer, FooterItem, Image, IntroContainer, Introduction, MainContainer, Navbar, NavbarItem, NavbarRight } from './portfolio-components';
import { useNavigate } from 'react-router-dom';
import logo from "../../icons/logo.svg";
import BoyImage from "../../icons/boy.svg";
import LinkedIn from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";
export default function Portfolio() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar>
                <Image src={logo} alt="logo" />
                <NavbarRight>
                    <NavbarItem onClick={() => navigate("/projects")}>
                        My Projects
                    </NavbarItem>
                    <NavbarItem>
                        Contact Us
                    </NavbarItem>
                </NavbarRight>
            </Navbar>
            <MainContainer>
                <BoyImagelogo src={BoyImage} alt="boy" />
                <IntroContainer>
                    <Introduction>
                        <b style={{ color: "rgb(246,145,30)" }}>Hey there!</b> My name is Saurabh Tiwari. <br />
                        I'm a Full-stack Javascript Developer.
                    </Introduction>
                </IntroContainer>
            </MainContainer >
            <Footer>
                <FooterItem src={LinkedIn} alt="linkedIn" onClick={() => window.open("https://www.linkedin.com/in/saurabh-tiwari-982418172/")} />
                <FooterItem style={{ height: "61px" }} src={github} alt="github" onClick={() => window.open("https://github.com/Saurabh1031")} />
            </Footer>
        </>
    );
}