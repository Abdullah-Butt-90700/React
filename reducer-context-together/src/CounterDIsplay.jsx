import { useContext } from "react";
import { CreateStateContext, CreateDispatchContext } from "./CreateCounter";

export default function CounterDIsplay() {
  const state = useContext(CreateStateContext);
  const dispatch = useContext(CreateDispatchContext);

  return(
    <div>
      <h2> Count {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
