import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, logout, login } from './'


export const checkingAuthentication = ( email, password ) =>{

  return async ( dispatch ) =>{
    dispatch(checkingCredentials());
  }

}
export const startGoogleSignIn = ( email, password ) =>{

  return async ( dispatch ) =>{
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok )  return dispatch(logout(result.errorMessage));
    dispatch(login(result))
  }

}

export const startCreatingUserWithEmailPassword = ({email, password, name })=>{


  return async( dispatch ) =>{
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, name });

    if ( !ok ) return dispatch(logout({errorMessage}))

    dispatch(login({  uid, photoURL, email, photoURL }))

    // console.log(resp);
  }

}


export const startWithEmailPassword = ( {email, password }) =>{

  return async(dispatch)=>{
    dispatch(checkingCredentials());
    const { ok,uid,photoURL, errorMessage } = await loginWithEmailPassword({email, password });

    if ( !ok ) return dispatch(logout({errorMessage}))

    dispatch(login({  uid, photoURL, email, photoURL }))
  }


}