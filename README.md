This is a playground app, started  from Create React App in order to try out xstate within a React app.

It simulates a very simple stop light that automatically transitions from green to yellow to red on a time interval defined in the state machine. Each StopLight component has its own independent state machine which you can see by adding or removing stop lights from the display. Each one will transition independently of the others you have created.

There's really not a ton to it. Take a look at src/lightMachine.js for the state machine definition. The React components are also very simple with a StopLight consisting of 3 Light components that will light up based on the state of the state machine.