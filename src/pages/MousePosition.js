
//  
import {useState,useEffect} from 'react';

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    //defino la posicion inical del mouse
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    //para agregar un event listener para mouse movement to the window objet to the call back 
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// como este es un side event
//necesito definir en el mousemovement event algo que me capture ese estado (useEffect) y que me lo elimine

const PanelMouseLogger = ({mousePosition}) =>{
    if(!mousePosition){
        return null;
    }
    return (
        <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({mousePosition}) =>{
    if (!mousePosition){
        return null;
    }

    return (
        <p>
            ({mousePosition.x},{mousePosition.y})
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function MousePosition(){
    return (
        <div className="App">
            <header className="Header">Little Lemon Restaurant</header>
            <PanelMouseTracker />
            <PointMouseTracker />

        </div>
        
    )
}
export default MousePosition;
