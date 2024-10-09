import cssStyle from "./gra.module.css";

import React from 'react'

console.log(cssStyle,"cssStyle");

const GraphicDesing = () => {
  return (
    <div className={cssStyle["gra-header-container"]}>
        <h1>This is Graphic Desing page</h1>
    </div>
  )
}

export default GraphicDesing