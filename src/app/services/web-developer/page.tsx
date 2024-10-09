import cssStyle from "./web.module.css";

import React from 'react'

console.log(cssStyle,"cssStyle");

const WebDeveloper = () => {
  return (
    <div className={cssStyle["web-header-container"]}>
        <h1>This is web Developer page.</h1>
    </div>
  )
}

export default WebDeveloper