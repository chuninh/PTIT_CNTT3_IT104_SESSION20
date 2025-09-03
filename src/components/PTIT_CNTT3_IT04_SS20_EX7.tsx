import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const initialState: State = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Số đếm: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
       
      >
        Tăng
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Giảm
      </button>
    </div>
  );
}
