import { useDispatch } from "react-redux";
import "./App.css";

import { useFetch } from "./components/Hooks/useFetch";

import { AppRouter } from "./components/Routes/AppRouter";
import { AddState } from "./Redux/globalState";

function App() {
  const { state } = useFetch();

  const dispatch = useDispatch();
  dispatch(AddState(state));

  return (
    <div className="App">{state.length >= 1 ? <AppRouter /> : "cargando"}</div>
  );
}

export default App;
