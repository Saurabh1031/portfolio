import Styled from "styled-components";

export const Navbar = Styled.div`
    display: flex;
    height: 12%;
    //background: #fff;
    color: white;
    font-family: 'Nunito Sans';
    justify-content: space-between;
   // gap: 26px;
    align-items: center;
    padding: 15px;
`;
export const NavbarRight = Styled.div`
    display: flex;
    gap: 27px;
`;
export const NavbarItem = Styled.div`
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    color: rgb(246,145,30);
    &:hover{
        //border: 2px solid #837AF7;
        border-radius: 20px;
        color: #fff;
        background: rgb(246,145,30);
    }
`;
export const MainContainer = Styled.div`
    display: flex;
    // height: 75%;
    //background: #fff;
    align-items: center;
    justify-content: center;
    /* color: #fff; */
    /* font-size: 20px; */
    /* font-weight: 400; */
    flex-direction: column;
    align-items: center;
`;
export const Image = Styled.img`
    margin: 17px 0 0 5px;
    height: 71px;
    width: 73px;
`;

export const BoyImagelogo = Styled.img`
    height: 261px;
    width: auto;
`;
export const IntroContainer = Styled.div`
`;
export const Introduction = Styled.div`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 32px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    //border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    @media (max-width: 490px) {
        font-size: 16px;
    }
`;
export const Footer = Styled.div`
    height: 13%;
    //background: #837AF7;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 29px;
`;
export const FooterItem = Styled.img`
    height: 78px;
    cursor: pointer;
`;
