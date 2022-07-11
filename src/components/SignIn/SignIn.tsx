import React from "react";
import { styled } from '@mui/system';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
import bg_image from '../../assets/images/r34.jpg'


interface Props{
    title:String
}


const SubPageHead = styled('div')({
    backgroundImage: `url(${bg_image})`,
    backgroundColor: 'rgba(0,0,0,.5)',
    backgroundBlendMode: 'overlay',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})

export const SignIn = (props:Props) => {
    return (
        <SubPageHead>
            <h1>
                {props.title}
            </h1>
        </SubPageHead>
    )
}