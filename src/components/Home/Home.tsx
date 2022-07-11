import React from 'react';
import { styled } from '@mui/system';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
import bg_image from '../../assets/images/r34.jpg';

interface Props{
    title:string;
    sub:string;
}

const Base = styled("section")({
    padding:0,
    margin:0,
    boxSizing:'border-box',
    height:'100vh',
    overflow:'hidden'
})
const Container = styled("section")({
    padding: '4rem 0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundImage:`url(${bg_image})`,
    backgroundBlendMode:'overlay',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height:'100%',
    
})
const FlexedCenter = styled("div")({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    gap:'2rem',
    height:'100%'
})

const NavContainer = styled("div")({
    display: "flex",
    padding:"1rem 4rem",
    justifyContent:"space-between",
    alignItems:'center'
})
const Logo = styled('h1')({
    margin: "1rem"
})
const LogoLink = styled(Link)({
    color: "blue",
    textDecoration: 'none',
    textTransform: 'uppercase'
})

const NavList = styled("ul")({
    display:"flex",
    gap:"2rem",
    listStyle:'none'
})

const NavLink = styled(Link)({
    display:"block",
    color:'blueviolet',
    textDecoration: 'none',
    fontWeight:700
})

export const Home = (props:Props) => {
    return (
        <Base>
            <NavContainer>
                <Logo>
                    <LogoLink to="/">Spicy Cars</LogoLink>
                </Logo>
                <NavList>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inventory">Inventory</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signin">SignIn</NavLink>
                    </li>
                </NavList>
            </NavContainer>
            <Container>
                <FlexedCenter>
                    <h2>{props.title}</h2>
                    <p>{props.sub}</p>
                    <Button color='primary' variant='contained'>Check out the Garage</Button>
                </FlexedCenter>
            </Container>
        </Base>
    )
}