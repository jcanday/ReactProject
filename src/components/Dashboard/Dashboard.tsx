import React from 'react';
import { Box, styled } from '@mui/material';
import bg_image from '../../assets/images/r34.jpg'
import {DataTable} from '../../components'
interface Props{
    title:String
}

const SubPageHead = styled('div')({
    backgroundImage: `url(${bg_image})`,
    backgroundColor: 'rgba(0,0,0,.5)',
    backgroundBlendMode: 'overlay',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'30vh'
})

export const Dashboard = (props:Props) => {
    return (
        <Box>
            <SubPageHead>
            <h1>
                {props.title}
            </h1>
            </SubPageHead>
            <DataTable/>
        </Box> 
    )
}