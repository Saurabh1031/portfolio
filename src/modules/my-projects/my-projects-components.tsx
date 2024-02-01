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
    color: rgb(246,145,30);
`;
export const CardContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
`;
export const Card = Styled.div`
    display: flex;
    background-color: rgb(246,145,30);
    height: 250px;
    width: 277px;
    flex-direction: column;
    //border: 3px solid black;
    border-radius: 15px;
    //margin-top: 20px;
    overflow: hidden;
    position: relative;
`;
export const ImageCard = Styled.div`
height: 75%;
//border-bottom: 3px solid black;
`;
export const Img = Styled.img`
height: 100%;
width: 100%;
`;
export const CardFooter = Styled.div`
height: 25%;
display: flex;
width: 100%;
//border: 3px solid black;
`;
export const FooterItem = Styled.div`
width: 50%;
justify-content: center;
font-weight: 700;
display: flex;
align-items: center;
font-family: 'Nunito Sans';
color: white;
//border: 2px solid black;
text-align: center;
cursor: pointer;
&:hover {
    color: rgb(246,145,30);
    background: #fff;
}
`;
export const DeleteImg = Styled.img`
    height: 24px;
    width: auto;
`;
export const WhiteCircle = Styled.div`
    display: flex;
    border: 3px solid #000;
    justify-content: center;
    align-items: center;    
    background-color: #fff;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    right: 2px;
    top: 2px;
`;
export const Title = Styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
   //height: 77px;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Nunito Sans';
    color: rgb(246,145,30);
`;