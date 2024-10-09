import cssStyle from "../contact/contact.module.css"
import Link from "next/link";


import React from 'react'

const Contact = () => {
  return (
    <div className={cssStyle["contact-header-container"]}>
        <h1>
            This is my Contact page
        </h1>

        <ul>
        <li><Link href="/">Go to Home Page</Link></li>
        <li><Link href="/about" target="_blank">Go to About Page</Link></li>
        <li><Link href="/services">Go to Service Page</Link></li>
      </ul>

    </div>
  );
}

export default Contact