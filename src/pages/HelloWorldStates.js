import { useState } from "react"; 
 
export default function Hws() { 
    const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
 
  function byeGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, greet:"Bye" , place: "World"} 
    }); 
  } 
  return ( 
    <div> 
      <h1>{greeting.greet} {greeting.place} </h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
      <button onClick={byeGreeting}>Update greeting</button> 
    </div> 
  ); 
} 