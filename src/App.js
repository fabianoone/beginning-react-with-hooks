import React, { useReducer} from "react";
import { Button } from "react-bootstrap";

const initialState = {
    count: 0
};

function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return { count: state.count + 1}
        case "decrement":
            return { count: state.count -1}
        case "reset":
            return initialState
        default:
            return initialState
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                Count: {state.count}
                <br />
                <br />
                <Button onClick={() => dispatch({type: "increment"})}>
                    increment
                </Button>
                <br />
                <br />
                <Button variant="secondary" onClick={() => dispatch({type: 'decrement'})}>
                    Decrement
                </Button>
                <br />
                <br />
                <Button variant="danger" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
            </div>
        </>
    );
}



export default App;
