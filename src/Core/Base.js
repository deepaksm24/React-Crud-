import React from "react";

export default function BaseApp({title, styles, children}){
    return (
        <div>
            <div>
            <div className="nav-styles">nav bar</div>
            <div className="title">{title}</div>
            </div>

             <div className="childred">
                {children}
        <footer>
            contact us
             <div>email : react@email.com</div>
             <div>phone : 76****143</div>
         </footer>
             
             </div>

        </div>
    )
}