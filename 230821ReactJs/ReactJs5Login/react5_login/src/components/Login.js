import React from 'react'

export default function Login({onSubmit}) {
  return (
    <>
        <h1>Veuillez vous connecter.</h1>
        <form  onSubmit={onSubmit}>
            <input type="text" id="login" placeholder='Identifiant'/>
            <input type='password' id="password" placeholder='mot de passe'/>
            <button>Connexion</button>
        </form>
    </>
  )
}
