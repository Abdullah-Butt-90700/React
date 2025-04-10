import { useReducer } from "react";
import { CreateStateContext, CreateDispatchContext } from "./CreateCounter";
import CounterDisplay from "./CounterDIsplay";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknown Error " + action.type);
  }
}
export default function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
  <CreateStateContext.Provider value={state}>
    <CreateDispatchContext.Provider value={dispatch}>
      <h1>Hello my component</h1>
      <CounterDisplay />
    </CreateDispatchContext.Provider>
  </CreateStateContext.Provider>
  );
}
