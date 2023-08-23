import React, { useState } from 'react'

export default function Calorie() {


    const [gender, setGender] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')
    const [activity, setActivity] = useState('')
    const [calo, setCalo] = useState('')

    
    const mbHomme = 66.5+(13.75*weight)+(5*height)-(6.77*age)
    const mbFemme = 655.1+(9.56*weight)+(1.85*height)-(4.67*age)

    const handleSubmit = (e) => {
        e.preventDefault()
        setCalo(gender ? Math.floor(mbHomme*activity) : Math.floor(mbFemme*activity))
    }
 

  return (
    <>
    <form onSubmit={handleSubmit}>
        <select id="genre" value={gender} onChange={e => {setGender(e.target.value)}}>
            <option value="">Genre</option>
            <option value="true">Homme</option>
            <option value="false">Femme</option>
        </select>
        <input id="poids" value={weight} onChange={e => {setWeight(e.target.value)}}/>
        <input id="taille" value={height} onChange={e => {setHeight(e.target.value)}}/>
        <input id="age" value={age} onChange={e => {setAge(e.target.value)}}/>
        <select id="activite" value={activity} onChange={e => {setActivity(e.target.value)}}>
            <option value="">Activité</option>
            <option value="1">Allongé</option>
            <option value="1.2">Sédentaire repos</option>
            <option value="1.4">Sédentaire 30mn</option>
            <option value="1.6">Sédentaire 1h</option>
            <option value="1.7">Sédentaire 2h</option>
            <option value="1.9">Physique 1h30</option>
            <option value="2">Physique 3 a 4h</option>
        </select>
        <button type='submit'>Valider</button>
    </form>

    <h1>{calo}</h1>
    </>
    
  )
}
