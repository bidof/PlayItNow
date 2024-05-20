"use client"
import React from 'react';

export default Button = (route) => {
    return 
    <button onClick={route.onClick}>
        {route.text}
    </button>
    ;
}

onClick = async () => {
    