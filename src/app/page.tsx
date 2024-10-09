import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1>Class Assingment</h1>
    <nav className="header">
      <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about" target="_blank">ABOUT</Link></li>
        <li><Link href="/contact" target="_blank">CONTACT</Link></li>
        <li><Link href="/services">SERVICE</Link></li>
      </ul>
      </nav> 
      </div>
  );
}
