import React, {useMemo, useState} from 'react'
import "./App.css"

export const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(40);

  function onWeightChange(event){
    setWeight(event.target.value);
  }
  function onHeightChange(event){
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const finHeight = height/100;

    return (weight/(finHeight*finHeight)).toFixed(2);

  }, [height,weight])

  return (
    <main>
      <h1>Project 1 : BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input 
        type="range" 
        className="input-slider" 
        step="1"
        min="40"
        max="200"
        onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
        type="range" 
        className="input-slider"
        step="1"
        min="70"
        max="300"
        onChange={onHeightChange}
         />
      </div>
      <div className="output-section">
        <p>Your BMI is :- </p>
        <p className="output">{output}</p>
      </div>

    </main>
  )
}

export default App;
