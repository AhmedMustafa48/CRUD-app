import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Notif = () => {
  return (
    <div>
      <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
   <strong>User Added Successfully</strong>
</Alert>
    </div>
  )
}

export default Notif
