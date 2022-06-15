import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyle from './styles';
import Input from './Input';

const initialState = {
  // firstName: '', 
  // lastName: '', 
  email: '',
  password: '',
  // confirmPassword: '' 
};


const Auth = () => {
  const classes = useStyle();
  // const [formData, setFormData] = useState(initialState);
  // const [showPassword, setShowPassword] = useState(false);
  // const [isSignup, setIsSignup] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // // const isSignup = true;

  // const handleShowPassword = () => setShowPassword(!showPassword);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("formdata == ", formData)
  //   if (isSignup) {
  //     dispatch(signup(formData, navigate));
  //   } else {
  //     dispatch(signin(formData, navigate));
  //   }
  // }

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // const switchMode = () => {
  //   setIsSignup((prevIsSignup) => !prevIsSignup);
  //   setShowPassword(false);
  // }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            {/* {
              isSignup && (
                <>
                  <Input 
                    name = "firstname" 
                    label = "First Name" 
                    handleChange = {handleChange} 
                    autoFocus 
                    half 
                  />
                  <Input 
                    name = "lastname" 
                    label = "Last Name" 
                    handleChange = {handleChange}  
                    half 
                  />
                </>
              )
            } */}
            <Input
              name="email"
              label="Email Address"
              type="email"
            />
            <Input
              name="password"
              label="Password"
            />
            {/* { isSignup && 
              <Input 
                name="confirmPassword" 
                label="Repeat Password" 
                handleChange={handleChange} 
                type="password" 
              /> 
            } */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>

            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth









