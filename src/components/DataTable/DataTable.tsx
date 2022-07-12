import React from 'react';
import { flexbox, styled } from '@mui/system';
import { Button, CssBaseline} from '@mui/material';
import { Link } from 'react-router-dom';
import bg_image from '../../assets/images/r34.jpg'
import { DataGrid,GridColDef } from '@mui/x-data-grid';

interface Props{
    title:String
}
const columns: GridColDef[]=[
    {field:'id', headerName:'ID',width:90},
    {field:'make',headerName:'Make',width:150},
    {field:'model',headerName:'Model',width:150},
    {field:'year',headerName:'Year',width:150}
]

const rows = [
    {id:1,make:'Honda',model:'Civic',year:1996},
    {id:2,make:'Acura',model:'TSX',year:2000},
    {id:3,make:'Nissan',model:'Skyline',year:1990},
    {id:4,make:'Toyota',model:'Celica',year:1994},
    {id:5,make:'Honda',model:'Civic',year:1996}
]


export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%'}}>
        <DataGrid
          style={{display:'flex'}}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    )
}