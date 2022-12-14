import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { checkingAuthentication, startGoogleSignIn, startWithEmailPassword } from '../../store/auth';


export const LoginPage = () => {


  const {status, errorMessage} = useSelector(state => state.auth)
  
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'bryanS@google.com',
    password: '123456'
  });

  const isAuthtenticating = useMemo( ()=> status === 'checking', [status] );
 
  
  const onSubmit = ( event ) =>{

    event.preventDefault();

    console.log({ email, password});

    dispatch(startWithEmailPassword({email, password}))
    // dispatch( checkingAuthentication() )
  }
  
  const onGoogleSignIn = () =>{
    
    console.log('GoogleSignIn');
    dispatch( startGoogleSignIn() )
  }

  return (
    <AuthLayout title="Login">

        <form  onSubmit={ onSubmit}  >
          <Grid container>
            <Grid item xs={12} sx={{ mt:2 }} >
              <TextField 
                label="Correo" 
                type="email" 
                name= "email"
                value={email}
                onChange={onInputChange}
                placeholder="correo@google.com" 
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }} >
              <TextField 
                label="Contraseña" 
                type="password" 
                name = "password"
                value={password}
                onChange= { onInputChange }
                placeholder="********" 
                fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2 , mt:1}}>
              <Grid 
                item xs={12} 
                display = { !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error'> { errorMessage} </Alert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled= { isAuthtenticating }
                  type="submit"
                  variant="contained" 
                  fullWidth
                >
                  Login 
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  onClick={onGoogleSignIn} 
                  disabled= { isAuthtenticating } 
                > 
                  <Google />
                  <Typography sx={{ ml:1}}> Google </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color ='inherit' to="/auth/register" >
                Crear una cuenta

              </Link>

            </Grid>

          </Grid>
        </form>
    </AuthLayout>

  );
};
  