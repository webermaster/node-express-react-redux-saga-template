import { applyMiddleware, compose, createStore } from 'redux'
import reducers from "./reducers";
import makeMiddleware, { runSagas } from './middleware';

const makeStore = () => {
    const store = createStore(
        reducers,
        compose(
            applyMiddleware(...makeMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f,
        ),
    );
    runSagas();
    return store;
};


export default makeStore;