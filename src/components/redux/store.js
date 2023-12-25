import { configureStore } from "@reduxjs/toolkit";

import getDataReducer from "./slice/fetchData";



const store = configureStore({
    reducer: {
        getData: getDataReducer
    }
})


export default store;