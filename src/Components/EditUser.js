import React, { useEffect, useState } from 'react'
import { Button, TextField ,Box} from '@mui/material'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

const EditUser = () => {
    
    const initialValue ={
        name: '',
        mail: '',
        city: '',
    }

    const [user, setUser] =useState(initialValue)
    const {name, mail, city} = user

    const navigate =useNavigate()
    const {id}=useParams()
    const getUserData = async() =>{
        const res = await axios.get(`http://localhost:1000/userData/${id}`)
        console.log(res)
        setUser(res.data)
    }

    const valueChange =(e)=>{
        setUser({ ...user , [e.target.name]: e.target.value})
    }
    useEffect(()=>{
        getUserData()
    },[])

    const editUser= async(id, user) =>{
        return await axios.put(`http://localhost:1000/userData/${id}`,user)
        .then(navigate('/')
        )
    }
    const editUserDetails =()=>{
        editUser(id, user)
    }
    const backTo =(e) =>{
        navigate('/')
    }

  return (
    <div>
      <form onSubmit={editUserDetails}>
      <Box>
      <TextField sx={{width: "400px", mb: "20px"}} label="Name" variant="filled"  name="name" value={name} onChange={valueChange}/><br />
      <TextField sx={{width: "400px", mb: "20px"}} label="Mail" variant="filled" name="mail" value={mail} onChange={valueChange}/>  <br />
      <TextField sx={{width: "400px", mb: "20px"}} label="City" variant="filled" name="city" value={city} onChange={valueChange} /><br />
      <Button variant='contained' sx={{ml:3 , mt:1, bgcolor:'#000000'}} type="submit">Update</Button>
      <Button variant='contained' sx={{ml:3 , mt:1, bgcolor:'#000000'}} onClick={(e)=> backTo(e)}>Back</Button>
      </Box>
      </form>
    </div>
  )
}
 
export default EditUser
