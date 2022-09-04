import NameCollector from './components/NameCollector';
import FutureGenerator from './components/FutureGenerator';
import { useState } from 'react'

function App() {

  const [givenName, setGivenName] = useState('')
  const [hideGenerator, setHideGenerator] = useState(true)
  const [hideWarning, setHideWarning] = useState(true)

  const toggleGenerator = () => {

    if (givenName.length > 0) {

      setHideGenerator(!hideGenerator)

      if(!hideWarning) {
        setHideWarning(true)
      }

    } else {
      setHideWarning(!hideWarning)
    }
    
  }

  return (
    <div className='app'>
      <div className='container'>
       { hideGenerator 
        ? 
       <NameCollector setName={setGivenName} onButtonClick={toggleGenerator} /> 
        : 
       <FutureGenerator nameToUse={givenName} onButtonClick={toggleGenerator} /> 
       }
       <p className={hideWarning ? 'hide' : ''} >I NEED YOUR NAME</p>
      </div>
    </div>
  );
}

export default App;
