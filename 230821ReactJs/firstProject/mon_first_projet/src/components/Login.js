import React, { useState } from 'react';


// 1>>> Realize a Form 
// w/ ev/thing necessary : champ email/pseudo, 2Champ Mot de passe, 3Button.  

// 2 To capture the values of the inputs use useState hook from React: 
export const Login = () => {
    // const [email, setEmail] = useState
    return (
        <>
        <form>
            <label for="email">Email</label>
            <input type = 'email' id='email' name='email' placeholder='Ex: martine.durand@gmail.com'></input>
            <label for="password">Mot de passe</label>
            <input type = 'password' id='password' name='password' placeholder='Ex: eR3k4Opm_Z374*' minLength={8} maxLength={30}></input>
            <button> Log In </button>
        </form>
        </>
    )
} 

// export default Login