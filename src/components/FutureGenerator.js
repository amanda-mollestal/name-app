import React from 'react'

const FutureGenerator = ({ nameToUse, onButtonClick }) => {

  const Chance = require('chance');
  const chance = new Chance();

  const country = chance.country({ full: true })

  const profession = chance.profession({rank: true})

  const animal = chance.animal()

  const animalName = chance.first()

  return (
    <div className='future-generator'>  
        <p>Let me tell you, {nameToUse}...</p> 
        <p>I looked into your future and this is what I saw! </p>
        <p>You will one day move to a country called {country} and work as a {profession}.</p>
        <p>But don't worry! To keep you company you will get a pet {animal} called {animalName}.</p>
        <button className='button' onClick={onButtonClick}>AGAIN</button>
    </div>
   

  )
}

export default FutureGenerator