import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

export function useProjectReducer(initialState) {
    return useReducer(reducer, initialState)
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProjectReducer({
        projects: [], 
        categories: [],
        currentCategory: '',
    });
    
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };