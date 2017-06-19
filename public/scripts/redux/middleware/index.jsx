import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const makeMiddleware = () => {
  const middleware = [ sagaMiddleware ];

  if ( process.env.NODE_ENV !== 'production' ) {
    const {createLogger} = require('redux-logger');
    return middleware.concat(createLogger({
      collapsed: true,
    }));
  }

  return middleware
};

export const runSagas = () =>
  sagaMiddleware.run(sagas);

export default makeMiddleware()
