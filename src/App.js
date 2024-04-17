
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './Components/Home';
import { useEffect } from 'react';
import { GET_USER_PENDING } from './Redux-saga/User/action/action';

function App() {
  let dispatch = useDispatch()

useEffect(()=>{
  dispatch({type : GET_USER_PENDING})
}, [dispatch])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
