import * as React from "react";
import "../styles/radio.css";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
};
// children = todos los <RadioOption> que pusiste en App.
// React.Children.map = recorre cada <RadioOption>.
// React.cloneElement = copia cada <RadioOption> y le añade onChange y checked.
// checked: child.props.value === selected → determina cuál radio está marcado según el estado selected.
// onChange → le dice a RadioGroup que actualice selected cuando se haga click.

export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
};
// RadioOptions es un array de <RadioOption> clonados con las props correctas.
// Es decir, cada RadioOption ahora sabe:
// Si está seleccionado (checked)
// Qué hacer cuando se selecciona (onChange)
// Luego se renderiza así:
// <div className="RadioGroup">{RadioOptions}</div