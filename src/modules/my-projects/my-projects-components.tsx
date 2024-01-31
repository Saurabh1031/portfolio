import Styled from "styled-components";
export const Container = Styled.div`
    height: 88%;
`;
export const Heading = Styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    height: 77px;
    font-size: 30px;
    font-weight: 500;
    font-family: 'Nunito Sans';
    color: mediumpurple;
`;
export const CardContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
`;
export const Card = Styled.div`
    display: flex;
    background: mediumpurple;
    height: 250px;
    width: 277px;
    flex-direction: column;
    border: 3px solid black;
    border-radius: 15px;
    //margin-top: 20px;
    overflow: hidden;
    position: relative;
`;
export const ImageCard = Styled.div`
height: 75%;
border-bottom: 3px solid black;
`;
export const Img = Styled.img`
height: 100%;
width: 100%;
`;
export const CardFooter = Styled.div`
height: 25%;
display: flex;
width: 100%;
`;
export const FooterItem = Styled.div`
width: 50%;
justify-content: center;
display: flex;
align-items: center;
color: white;
border: 2px solid black;
text-align: center;
cursor: pointer;
`;
export const DeleteImg = Styled.img`
position: absolute;
right: 2px;
top: 2px;
height: 26px;
width: auto;
cursor: pointer;
`;
