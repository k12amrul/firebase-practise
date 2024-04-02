import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
import { Helmet } from 'react-helmet-async';


const Login = () => {

    <Helmet>
        <title>My Awesome Page  || Login </title>

        
    </Helmet>
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // const provider = new GithubAuthProvider();
  
  
    const [ user  ,setUser ] =useState(null)
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user)

            })
            .catch( err =>{
                console.log('err' ,err.message )
            })
            
    }

    const hGithub =( )=>{
        signInWithPopup( auth , githubProvider)
        .then( (result ) =>{
            const user = result.user
            console.log(user)
            setUser( user)
        } )
        .catch( err =>{
            console.log(err)
        })
    }
    const handleLogOut = ( )=> {
        signOut(auth)
        .then(() => {
            setUser(null)
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div>
            <h1> Login   </h1>
            {
               user  &&  <div>
              <h1> {user.displayName}   </h1>
              <h1> {user.email}   </h1>
              <img src={`user.photoURL`} alt="" />
               </div>
            }
           
             {
            user ? 
            <button onClick={handleLogOut} >  LogOut </button>
            :
            <>
            <button onClick={handleGoogleSignIn} >  Login </button>
            <button onClick={hGithub} >  Github  Login </button>
          
            
            </>
           }
           
        </div>
    );
};

export default Login;