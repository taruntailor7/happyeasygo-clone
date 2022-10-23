import { legacy_createStore as createStore, 
    applyMiddleware
    // combineReducers 
} from "redux";
import reducer from './Signup/reducer'
import thunk from "redux-thunk";

// const rootReducer = combineReducers({
//     todoState: todoReducer,
//     countState: countReducer
//   });

const middlewares = applyMiddleware(thunk);

export const store = createStore(reducer,middlewares);

// store.subscribe(() => {
//     console.log("store got updated", store.getState());
// });