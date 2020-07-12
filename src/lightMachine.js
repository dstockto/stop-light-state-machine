import {Machine} from "xstate";

const lightMachine = Machine({
    initial: 'green',
    states: {
        green: {
            on: {
                CHANGE: 'yellow'
            },
            after: {
                2000: 'yellow'
            }
        },
        yellow: {
            on: {
                CHANGE: 'red',
            },
            after: {
                750: 'red'
            }
        },
        red: {
            on: {
                CHANGE: 'green',
            },
            after: {
                1000: 'green'
            }
        },
    }
});

export default lightMachine;