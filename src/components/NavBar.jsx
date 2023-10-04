import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1200px;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;
const Links = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 50px;

`;

const Logo = styled.img`
    width: 100px;
    border-radius: 5px;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        display: none;
        padding: 10px;
    }
`;

const ListItem = styled.li`
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;

    &:hover{
        
        animation: moveText 0.1s linear both;

        @keyframes moveText {
            to{
            color: blueviolet;
            background-color: lightgray;
            }
        }

    }
`;

const Icons = styled.div`
    
`;
const Button = styled.button`
    width: 100px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    cursor: pointer;
`;

function NavBar() {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src='./img/logo.png' />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Work</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default NavBar