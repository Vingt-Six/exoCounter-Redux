import { useState } from 'react';
import './App.css';
import { increment, decrement, incrementInput, decrementInput } from './features/counter'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [number, setNumber] = useState(0)


  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())} >plus</button>
      <button onClick={() => dispatch(decrement())} >moins</button>
      <br />
      <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(incrementInput(number))} >Rajouter</button>
      <button onClick={() => dispatch(decrementInput(number))} >Enlever</button>
    </div>
  );
}

export default App;
