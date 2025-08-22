function DessertsList(props) {
  // Implement the component here.
  const listItems = props.data
    .filter(cal=>cal.calories<=500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => {
      const itemText = `${ dessert.name } - ${ dessert.calories } cal`;
    return <li>{itemText}</li>
  })
  return (<div>
  
{ listItems }
  </div>);
}

export default DessertsList;

// const DessertsList = (props) => {
//  const lowCaloriesDesserts = props.data
//    .filter((dessert) => {
//      return dessert.calories < 500;
//    })
//    .sort((a, b) => { 
//      return a.calories - b.calories; 
//    })
//    .map((dessert) => { 
//      return ( 
//        <li>
//          {dessert.name} - {dessert.calories} cal 
//        </li> 
//      ); 
//    }); 
//  return <ul>{lowCaloriesDesserts}</ul>; 

// }
// export default DessertsList; 