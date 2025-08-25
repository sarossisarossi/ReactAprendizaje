import "../styles/ScrollTracker.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    
    const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render(mousePosition);
};

// This component should not receive any props
//PanelMouseLogger ya no recibe props.
//No hay if statements: MousePosition siempre le pasa mousePosition.

//Usa el render prop para renderizar la UI del panel con las coordenadas.
const PanelMouseLogger = () => {
    return (
      <MousePosition
        render={(mousePosition) => (
          <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
              <span>x: {mousePosition.x}</span>
              <span>y: {mousePosition.y}</span>
            </div>
          </div>
        )}
      />
    );
  };

  const PointMouseLogger = () => {
    return (
      <MousePosition
        render={(mousePosition) => (
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
    );
  };

function ScrollTracker() {
  return (
    <div className="ScrollTracker">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default ScrollTracker;
