import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import { useUserContext } from './userContext';
function LoginPage() {
    const {login} = useUserContext();
    const [username,setUsername] = useState({
        name:"",
        password:""
    })
    const HandleChange = (event) =>{
          const target = event.target;
          const value = target.value;
          const name = target.name;

          setUsername({
             ...username,
                [name] : value, 
          })
    }

    const HandleClick = () =>{
       login(username.name)
    }
  return (
    <div>
         <Grid >
            <Paper elevation = {5} style = {{padding:'5px',height:'50vh',width:'24%', margin:'150px auto'}}>
              <h1 style = {{textAlign:'center'}}>Login-Page</h1>
              <Grid style = {{marginTop:'40px'}}>
              <TextField onChange = {HandleChange} name = "name" label="Name" value = {username.name} placeholder='Enter your name' style = {{height:'20px'}} variant="outlined" fullWidth />
              <TextField onChange = {HandleChange} name = "password" label="Password" value = {username.password} placeholder='Enter your password' type = "password" style = {{marginTop:'50px'}} variant="outlined" fullWidth />
              <button onClick = {HandleClick} className='btn btn-primary' style = {{width:'100%',marginTop:'30px'}}>Submit</button>
              </Grid>
            </Paper>
         </Grid>
    </div>
  );
}

export default LoginPage;
