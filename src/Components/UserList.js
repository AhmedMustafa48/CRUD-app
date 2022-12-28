import React, { useEffect, useState } from 'react'
import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import Navheader from './Navheader'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ResponsiveDialog from './Dialogue';



const UserList = () => {
  const [usersData , setUsersData] =useState([])
  useEffect(()=>{
    axios.get('http://localhost:1000/userData')
    .then((res)=>setUsersData(res.data))
  },[usersData])



  const deleteUser =(id, e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:1000/userData/${id}`)
    .then(res => console.log("deleted!", res))
    .catch(err =>console.log(err))
  }

  // const [isOpen, setIsOpen]=useState(false)
  // const popDialog=() =>{
  //   // setIsOpen(true)
  //   <ResponsiveDialog/>
  //   console.log("clicked")
  // }
  return (
    <div>
        <Navheader/>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell><TableCell>Name</TableCell><TableCell>Mail</TableCell><TableCell>City</TableCell><TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        {
          usersData.map((val,id)=>{
            return(
              <>
              <TableBody>
                <TableRow>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.mail}</TableCell>
                  <TableCell>{val.city}</TableCell>
                  <TableCell>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button variant='contained' component={Link} to={`/edit/${val.id}`}>Edit</Button>
                      </Grid>
                      <Grid item>
                        <Button 
                        onClick={(e) =>  deleteUser(val.id, e)} 
                        // onClick={popDialog}
                        variant='contained' sx={{bgcolor:'red'}} >Delete
                        </Button>
                         {/* {isOpen && 
                            <ResponsiveDialog/>
                            } */}
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
              </>
            )
          })
        }
        <TableBody>

        </TableBody>
      </Table>

    </div>
  )
}

export default UserList
