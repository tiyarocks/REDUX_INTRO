import React from "react"
import ReactDOM from "react-dom"         //default exports
import { Provider } from "react-redux";//named exports
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers"
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    
    document.querySelector("#root")
)