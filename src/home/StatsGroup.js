import React from "react";
import { useSelector } from "react-redux";

import { statsTeam } from "../helpers/statsTeam";
import { totalProgress } from "../helpers/totalProggres";

/* ACÁ SE ENCUENTRA EL COMPONENTE QUE CONTIENE LAS ESTADISTICAS DEL TEAM */

export const StatsGroup = () => {
  const state = useSelector((store) => store.stateGlobal.characters);

  const {
    speed,
    power,
    combat,
    strength,
    intelligence,
    durability,
    MaxStats,
    height,
    weight,
    total,
  } = statsTeam(state);

  /* CREO UN ARRAY DE OBJETOS, LUEGO EN EL MAP TRANSFORMO EL ELEMENTO DEVOLVIENDO UN OBJETO CON SU MISMO NOMBRE Y CON EL VALOR DEL PORCENTAJE QUE REPRESENTA AL GLOBAL (CON LA FUNCION "TOTALPROGRESS" CALCULO EL PORCENTAJE SOBRE EL TOTAL)*/
  const arrayProgress = [
    { speed },
    { power },
    { combat },
    { strength },
    { intelligence },
    { durability },
  ].map((el) => {
    return { [Object.keys(el)]: totalProgress(total, Object.values(el)) };
  });

  return (
    <div className="stats-team">
      <h4>
        TEAM : <span>{Object.keys(MaxStats)}</span>
      </h4>
      <h5> El resto de las cualidadades son:</h5>

      {/* REALIZA UN MAPEO OBTENIENDO EL VALOR DEL KEYS DE CADA OBJETO DEL "ARRAYPROGRESS" PARA HACERLAS INDIVIDUALES */}

      {arrayProgress.map((x) => {
        return (
          <div key={Object.keys(x)[0]}>
            <p>{Object.keys(x)[0]}</p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: [Object.values(x)[0]] + "%" }}
              >
                {Math.round(Object.values(x)[0])}%
              </div>
            </div>
          </div>
        );
      })}

      <hr />
      <p>Height Prom: {Math.round(height / state.length)} cm</p>
      <p>Weight Prom: {Math.round(weight / state.length)} kg </p>
    </div>
  );
};
