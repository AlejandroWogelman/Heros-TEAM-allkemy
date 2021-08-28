import { useState } from "react";
import "./App.css";

import { GlobalState } from "./components/Context/GlobalState";

import { useFetch } from "./components/Hooks/useFetch";
import { useFetchIndIvidual } from "./components/Hooks/useFetchIndIvidual";
import { AppRouter } from "./components/Routes/AppRouter";

function App() {
  const [inputHERO, setInputHERO] = useState("");

  //Fetch del grupo de heroes por default. El estado es el general
  let { state, setState } = useFetch();

  //Funcion de borrado de un personaje del grupo
  const handleDelete = (id) => {
    if (state.length > 1) {
      setState(state.filter((el) => el.id !== id));
    }
  };

  //Peticion individual
  const { SEARCH: resultSearch } = useFetchIndIvidual(inputHERO);

  //Actualizacion del parametro de PETICION
  const handleFETCH = async (name) => {
    setInputHERO(name);
  };

  //validacion y agregado de un nuevo heroe
  const handleAdd = (hero) => {
    if (state.find((el) => hero.id === el.id)) {
      return;
    }

    const counter = { pos: 0, neg: 0 };
    state.forEach((h) =>
      h.biography.alignment === "good"
        ? (counter.pos = counter.pos + 1)
        : (counter.neg = counter.neg + 1)
    );

    if (hero.biography.alignment === "good" && counter.pos < 3) {
      setState([...state, { ...hero }]);
    } else if (hero.biography.alignment === "bad" && counter.neg < 3) {
      setState([...state, { ...hero }]);
    }
  };

  return (
    <div className="App">
      <GlobalState.Provider
        value={{ state, handleDelete, handleFETCH, resultSearch, handleAdd }}
      >
        <AppRouter />
      </GlobalState.Provider>
    </div>
  );
}

export default App;
