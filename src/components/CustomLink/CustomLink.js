import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });

   return (
      <div style={{ display: "inline" }}>
         <Link
            style={{
               color: match ? "orange" : "",
               borderBottom: match ? "1px solid orange" : "",
               borderRadius: match ? "5px" : "",
               paddingBottom: match ? "5px" : "",
               transition: match ? " 0.3s" : "",
            }}
            to={to}
            {...props}
         >
            {children}
         </Link>
      </div>
   );
}

export default CustomLink;
