import React from "react";
import { useState } from "react";

export const useLocalContext = () => {
    const [local, setLocal] = useState('부산');

    return{
        local,
        setLocal
    };
}