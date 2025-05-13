import "./App.css";
import { useState } from "react";
import Boton from "./componentes/boton";
import Estadisticas from "./componentes/estadisticas";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const manejarGood = () => {
    setGood(good + 1);
  };
  const [neutral, setNeutral] = useState(0);
  const manejarNeutral = () => {
    setNeutral(neutral + 1);
  };
  const [bad, setBad] = useState(0);
  const manejarBad = () => {
    setBad(bad + 1);
  };

  const obtenerTotal = () => {
    return good + neutral + bad;
  };

  const obtenerPromedio = () => {
    const total = good + neutral + bad;
    const cantidad = 3;
    return total / cantidad;
  };

  const calcularPorcentaje = () => {
    return Math.round((good / obtenerTotal()) * 100);
  };

  return (
    <div className="div-container">
      <h1>Give FeedBack</h1>
      <div className="fila-btn">
        <Boton texto={"good"} manejarClick={manejarGood} />
        <Boton texto={"neutral"} manejarClick={manejarNeutral} />
        <Boton texto={"bad"} manejarClick={manejarBad} />
      </div>
      <h2>estadisticas</h2>
      <div className="stats-container">
        <Estadisticas texto={"good"} valor={good} />
        <Estadisticas texto={"neutral"} valor={neutral} />
        <Estadisticas texto={"bad"} valor={bad} />
        <Estadisticas texto={"total"} valor={obtenerTotal()} />
        <Estadisticas texto={"promedio"} valor={obtenerPromedio()} />
        <Estadisticas texto={"positivos"} valor={`${calcularPorcentaje()}%`} />
      </div>
    </div>
  );
};
export default App;
