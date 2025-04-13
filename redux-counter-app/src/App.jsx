import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , zero} from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Redux Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch( zero())}> zero</button>
    </div>
  );
}

export default App;