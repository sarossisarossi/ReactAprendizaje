import {useReducer} from 'react';
import './App.css';

const reducer = (state, action) => {
    if (action.type === 'buy_ingredients') return {money:state.money-10};
    if (action.type === 'sell_a_meal') return {money:state.money +10};
    return state;
    }

    function Cashaccount(){

        const intitalState = {money:100};
        const [state,dispatch] = useReducer(reducer,intitalState);

        return(
            <div className="App">
                <h1>Wallet: {state.money}</h1>
                <div>
                    <button onClick={()=> dispatch({type: 'buy_ingredients'})}>Shopping for Veggies!</button>
                    <button onClick={()=> dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
                </div>
            </div>
            
        );
    }

    export default Cashaccount;