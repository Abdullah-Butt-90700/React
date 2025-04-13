const INCREMENT = "increment";
const DECREMENT = "decrement";
const ZERO = "zero";
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const zero = () => ({ type: ZERO });
const initialState = {
  count: 0,
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case ZERO:
      return { count: (state.count = 0) };

    default:
      return state;
  }
}
