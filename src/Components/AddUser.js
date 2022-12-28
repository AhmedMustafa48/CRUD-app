import React, { useState } from 'react'
import { Button, TextField ,Box, CircularProgress} from '@mui/material'
import Navheader from './Navheader'


import { useNavigate } from 'react-router';
import axios from 'axios';
import Notif from './Notif';

import { validator } from 'validator';

const AddUser = () => {
    const[data,  setData] =useState({
        name:'',
        mail:'',
        city:'',
    })

const handleChange =(e) =>{
    const {name , value} =e.target;
    setData((all)=>{
        return {...all , [name]:value};
    })
}
const navigate =useNavigate()

const [isLoading , setIsLoading] =useState(false)
const [alertOpen , setAlertOpen]=useState(false)

const submitForm =(e)=>{
    setIsLoading(true);
    setAlertOpen(true)
    e.preventDefault()
    console.log(data)
    axios.post('http://localhost:1000/userData' , data).then((res)=>{

        navigate('/')
        setIsLoading(false)
    }
        )
    
    setData({
        name:"",
        mail:"",
        city:"",
    })
}


  return (
    <div>
        <Navheader/>
      <form onSubmit={submitForm} disabled={isLoading}>
      <Box>
      <TextField sx={{width: "400px", mb: "20px"}} label="Name" variant="filled"  name="name" value={data.name} onChange={handleChange}/><br />
      <TextField sx={{width: "400px", mb: "20px"}} label="Mail" variant="filled" name="mail" value={data.mail} onChange={handleChange}/>  <br />
      <TextField sx={{width: "400px", mb: "20px"}} label="City" variant="filled" name="city" value={data.city} onChange={handleChange}/><br />
      {
        isLoading ? <CircularProgress  /> : <Button variant='contained' sx={{ml:3 , mt:1, bgcolor:'#000000'}} type="submit">Submit</Button>
      }
      {
        alertOpen && <Notif/>
      }
      
      </Box>
      </form>
    </div>
  )
}

export default AddUser
