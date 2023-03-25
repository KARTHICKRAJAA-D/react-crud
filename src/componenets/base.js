import React from "react";
import { useHistory } from "react-router-dom";

export function BaseApp({children}) {
    const history = useHistory();
    return (
        <div>
            <div className="header">
               <button onClick={()=>history.push('/students')} className="students">STUDENTS</button>{' '}
              
               <button onClick={()=>history.push('/adduser')} className="user">NEW PERSON</button>
            </div>
            <div className="children" >
             {children}
             <div className="footer">
                <h3>CONTACT US</h3>
            
            </div>
            </div>
             
            

        </div>
    )
}