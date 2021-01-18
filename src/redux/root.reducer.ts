import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import appReducer, {moduleName as appModule} from "./app.module"; //'app'

const reducer = combineReducers({
    router: routerReducer,
    [appModule]: appReducer
});

export default reducer;
export type RootState = ReturnType<typeof reducer>;
