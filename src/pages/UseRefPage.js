import { useState, useEffect, useRef } from "react";
export default function UserefPage() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
// Step 1: Crear un ref
  const ref = useRef();

  // Step 2 y 3: Usar useEffect para actualizar ref.current después de cada render
  // Aca retorna ref.current antes de realizar el render, mientras que useEffect se ejecuta una vez que el render esta listo
  // por eso guarda el status.
  useEffect(() => {
    ref.current = val;
  }, [val]); // Dependencia: val

  // Step 4: Retornar el valor anterior
  return ref.current;
}
