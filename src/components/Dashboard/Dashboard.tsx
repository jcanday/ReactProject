import React, {useState} from 'react';
import { Box, 
styled, 
Button , 
Dialog, // new item
DialogActions, // new item
DialogContent, // new item
DialogContentText, // new item
DialogTitle } from '@mui/material';
import bg_image from '../../assets/images/r34.jpg'
import {DataTable, CharForm} from '../../components'
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
    const [dialogOpen, setDialogOpen] = useState(false);
    // Handle Dialog Open/Close
    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    }
    return (
            
        <Box>
            <SubPageHead>
            <h1>
                {props.title}
            </h1>
            <Button onClick={handleDialogClickOpen}>Create New Char</Button>
                {/*Dialog Pop Up begin */}
                <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Add New Char</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Add A New Char</DialogContentText>
                      <CharForm />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick = {handleDialogClickClose} color="warning">Cancel</Button>
                  </DialogActions>
                </Dialog>
            </SubPageHead>
            <DataTable/>
        </Box> 
    )
}