import Light from "./Light";
import React from "react";
import {useMachine} from "@xstate/react";
import lightMachine from "./lightMachine";

export default () => {
    const [lights] = useMachine(lightMachine, {initial: 'red'});

    return (
        <div className={'stopLight'}>
            <Light color={'red'} lit={lights.value === 'red'}/>
            <Light color={'yellow'} lit={lights.value === 'yellow'}/>
            <Light color={'green'} lit={lights.value === 'green'}/>
        </div>
    );
};

