import React, {useState} from 'react';
import './App.css';
import './light.css';
import StopLight from "./StopLight";

function App() {
    const [lights, setLights] = useState(1);

    const inc = () => {
         setLights(Math.min(14, lights + 1));
    }
    const dec = () => {
        setLights(Math.max(1, lights - 1));
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={inc}>Add</button>
                <button onClick={dec}>Dec</button>
                <div className={'lightContainer'}>
                    {
                        Array.apply(null, Array(lights)).map((_, i) => (
                                <StopLight key={i} />
                            )
                        )
                    }
                </div>
            </header>
        </div>
    );
}

export default App;
