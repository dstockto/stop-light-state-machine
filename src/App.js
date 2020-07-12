import React, {useState} from 'react';
import './App.css';
import './light.css';
import StopLight from "./StopLight";

function App() {
    const [lights, setLights] = useState(1);
    const maxLights = 14;
    const minLights = 0;

    const inc = () => {
         setLights(Math.min(maxLights, lights + 1));
    }
    const dec = () => {
        setLights(Math.max(minLights, lights - 1));
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={inc} disabled={lights >= maxLights}>Add</button>
                <button onClick={dec} disabled={lights <= minLights}>Dec</button>
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
