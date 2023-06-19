import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"

const Login = ({data})=>{
  const navigation = useNavigate()
  const [login,setLogin] = useState({userName:null,password:null})
  const handleChange=(key,value)=>{
      setLogin((prevState) => ({
        ...prevState,
        [key]:value

      }))
  }
  const onLogin=()=>{
    const index = data.findIndex((e)=>e.userName === login.userName)
    if(index !== -1){
      if(data[index].password === login.password){
          navigation('/home')
          localStorage.setItem('ISLOGIN', true);
          localStorage.setItem('id', data[index].id)
      }
    }
  }
  return(
    <Container component="main" m={5}>
            <Box
            sx={{  
              display: "flex",
              flexDirection: "column", 
              alignItems: "center",
              position: "absolute",
              top:  {lg:'40%',md:'35%',sm:'30%',xs:'15%'},
              left: {lg:'40%',md:'35%',sm:'30%',xs:'15%'},
            }}
          >
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
                <Box mt={2}>
                  <TextField
                    label="Username"
                    id="userName"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(e)=>handleChange(e.target.id,e.target.value)}
                    type="text"
                  />
              </Box>
              <Box my={2}>          
                    <TextField
                    label="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(e)=>handleChange(e.target.id,e.target.value)}
                    type="password"
                  />
                </Box>
              <Button type="button" color="primary" variant="contained" disabled={!login.userName || !login.password} onClick={onLogin}>
                Sign in
              </Button>
              </Box>
    </Container>
        )
}

export default Login