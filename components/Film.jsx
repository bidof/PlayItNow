import React from "react";

export default function Film({file}){
    return <div>
        <h3> {file.id} {file.name}</h3>
        <p>{file.size}</p>
    </div>
    ;

}
