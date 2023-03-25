import React from "react";
import { useHistory } from "react-router-dom";

 export function Nopage(){
    const history = useHistory();
    return(
        <div>
        <h1>404</h1>
<button onClick={history.push('/students')}>Dashboard</button>
</div>
    )
}