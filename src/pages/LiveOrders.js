import * as React from "react";
import "./App.css";

const Row = ({children}) => {
    return(
        <div className="Row">
            {children}
        </div>
    );
};

const Row2 = ({children}) => {
    return(
        <div className="Row">
            {React.Children.map(children, (child,index) =>{
                return child;
                })}
        </div>
    );
};

const Row3 = ({children,spacing}) => {
    const childStyle ={
        marginLeft:`${spacing}px` ,
    };

    return(
        <div className="Row">
            {React.Children.map(children, (child,index) =>{
                return React.cloneElement(child,{
                    style: {
                        ...child.props.style,
                        ...(index > 0 ? childStyle : {}),
                    },
                });
                })}
        </div>
    );
};

function LiveOrders() {
    return (
        <div className="App">
            <Row spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>30$</p>
                <p>18:30</p>
                <p>John</p>
            </Row>
            <Row2 spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>30$</p>
                <p>18:30</p>
                <p>John</p>
            </Row2>
            <Row3 spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>30$</p>
                <p>18:30</p>
                <p>John</p>
            </Row3>
        </div>
    );
}

export default LiveOrders