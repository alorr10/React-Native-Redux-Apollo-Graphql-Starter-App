import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/index';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, logger)
);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, autoRehydrate } from 'redux-persist'
// import { AsyncStorage } from 'react-native'
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import reducers from '../reducers/index';

// const store = createStore(
//   reducers,
//   {},
//   compose(
//     applyMiddleware(thunk, logger),
//     autoRehydrate()
//   )
// );

// persistStore(store, { storage: AsyncStorage, whitelist: ['icloudToken'] });

// export default store;