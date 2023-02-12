import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'sell': {
      return {
        price: state.price + action.price,
      };
    }
    case 'buy': {
      return {
        price: state.price - action.price,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}
const initialState = { price: 0 };

export { reducer, initialState };
