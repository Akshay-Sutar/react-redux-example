import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "SET_COUNTER", payload: counter + 1 });
  };
  const decrementCounter = () => {
    dispatch({ type: "SET_COUNTER", payload: counter - 1 });
  };

  return (
    <div className="App">
      <div>
        <label>Counter value : {counter}</label>
      </div>
      <div>
        <button onClick={incrementCounter}>+1</button>
        <button onClick={decrementCounter}>-1</button>
      </div>
    </div>
  );
}

export default App;
