import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const makeMiddleware = () => {
  const middleware = [ sagaMiddleware ];

  if ( process.env.NODE_ENV !== 'production' ) {
    const logger = require('redux-logger'); // eslint-disable-line global-require

    return middleware.concat(logger({
      collapsed: true,
    }))
  }

  return middleware
};

export const runSagas = () =>
  sagaMiddleware.run(sagas);

export default makeMiddleware()
