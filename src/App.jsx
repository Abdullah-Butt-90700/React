import { useReducer } from 'react'
import './App.css'

function App() {
  function reducer (state , action) {
  switch (action.type){
    case 'increment':
      return state+1 
      case 'decrement' :
        return state - 1
        default :
        return state
    
    }

 
  }
  
  const [count , dispatch] = useReducer(reducer , 0)

  return (
    <>
    <p>count {count}</p>
    <button onClick={()=> dispatch({type : 'increment'}) }>+</button>
    <button onClick={()=> dispatch({type : 'decrement'})} >-</button>
    
    
    </>
  )
}

export default App
