import cssStyle from "./service.module.css";

import Link from "next/link";

console.log(cssStyle,"cssStyle");

import React from 'react'

const Services
 = () => {
  return (
    <div className={cssStyle["service-header-container"]}>
        <h1>This is my services page</h1>
        
        <ul>
          <li><Link href="/services/web-developer">Web Developer page</Link></li>
          <li><Link href="/services/graphic-desing">Graphic Desing page</Link></li>
        </ul>

        <ul>
        <li><Link href="/">Go to Home Page</Link></li>
        <li><Link href="/contact" target="_blank">Go to Contact Page</Link></li>
        <li><Link href="/about">Go to About Page</Link></li>
      </ul>

    </div>
  );
}

export default Services
