import React from "react";
import { createContext } from "react";

const initialState = {
    local: "",
    setLocal: () => {}
};

export const LocalContext = createContext(initialState);