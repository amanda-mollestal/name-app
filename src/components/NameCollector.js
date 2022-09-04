

const NameCollector = ({ onButtonClick, setName }) => { 

  return (
    <div className='name-collector'>
      Enter your name... if you dare to... 
      <input 
        onChange={(e) => setName(e.target.value)}
      />
      <button className='button' onClick={onButtonClick}>ENTER</button>
    </div>
  )
}

export default NameCollector