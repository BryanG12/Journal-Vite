import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  name: ''
}

const formValidations = {

  email: [ ( value ) => value.includes('@'), 'El correo no es valido' ],
  password: [ ( value ) => value.length >=6 , 'Ingrese una contraseña valida' ],
  name: [ ( value ) => value.length >1, 'El nombre es obligatorio' ],

}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const {status, errorMessage} = useSelector(state => state.auth)

  const { formState,name, email, password, onInputChange,
          isFormValid,nameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );


  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const isCheckingAunthentication = useMemo(() => status === 'checking' , [status]);
  

  const onSubmit = (event) =>{

    event.preventDefault();

    setFormSubmitted(true);

    if( !isFormValid ) return;

    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
    <AuthLayout title="Crear Cuenta">
      <p> fomulario: { isFormValid ? 'valido': 'Incorrecto' } </p>

        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt:2 }} >
              <TextField 
                label="Nombre Completo" 
                type="text" 
                placeholder="Nombre Completo" 
                fullWidth
                name='name'
                value={name}
                onChange= { onInputChange }
                error= {!!nameValid && formSubmitted }
                helperText = {nameValid }
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }} >
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com" 
                fullWidth
                name='email'
                value={email}
                onChange={ onInputChange }
                error= {!!emailValid && formSubmitted }
                helperText = {emailValid }
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }} >
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="********" 
                fullWidth
                name='password'
                value={password}
                onChange={ onInputChange }
                error= {!!passwordValid && formSubmitted }
                helperText = {passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2 , mt:1}}>
              <Grid 
                item xs={12} 
                display = { !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error'> { errorMessage} </Alert>
              </Grid>
              <Grid item xs={12} >
                <Button 
                  variant="contained" 
                  fullWidth
                  type="submit"
                  disabled = { isCheckingAunthentication }
                > Crear Cuenta </Button>
              </Grid>
              
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}  >¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color ='inherit' to="/auth/login" >
                Ingresar
              </Link>

            </Grid>

          </Grid>
        </form>
    </AuthLayout>

  );
};
  