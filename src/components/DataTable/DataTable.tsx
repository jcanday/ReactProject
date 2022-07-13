import React, {useState} from 'react';
import { flexbox, styled } from '@mui/system';
import { Button, CssBaseline} from '@mui/material';
import { Link } from 'react-router-dom';
import bg_image from '../../assets/images/r34.jpg'
import { DataGrid,GridColDef,GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api'; // ADD THIS
import {useGetData} from '../../custom-hooks'
import { Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@mui/material'; // ADD THESE
import { CharForm } from '../../components/CarForm';


const columns: GridColDef[]=[
    {field:'id', headerName:'ID',width:90},
    {field:'name',headerName:'Name',width:150},
    {field:'desc',headerName:'Description',width:150},
    {field:'super_power',headerName:'Super Power',width:150},
    {field:'comics_appeared',headerName:'Comics Appeared In',width:150}
]

interface gridData{
    data:{
      id?:string;
    }
  }
  export const DataTable =  () => {
  
    let { charData, handleDataFetch } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = async () => {
      await serverCalls.delete(`${gridData[0]}`)
      handleDataFetch()
    }
  
    console.log(gridData) // a list of id's from checked rows
  
      return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>Chars In Inventory</h2>
            <DataGrid 
                          rows={charData} 
                          columns={columns} 
                          pageSize={5} 
                          checkboxSelection 
                          onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
                          {...charData}  
                      />
  
          <Button onClick={handleOpen}>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
            {/*Dialog Pop Up begin */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update A Char</DialogTitle>
            <DialogContent>
              <DialogContentText>Char id: {gridData[0]}</DialogContentText>
                <CharForm id={`${gridData[0]}`}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="warning">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
          </div>
        );
  }