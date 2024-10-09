import cssStyle from "../about/about.module.css";
import Link from "next/link";

console.log(cssStyle,"cssStyle");

function About  () {
return(
    <div className={cssStyle["about-header-container"]}>
        <h1>This is my about page</h1>

        <ul>
        <li><Link href="/">Go to Home Page</Link></li>
        <li><Link href="/contact" target="_blank">Go to Contact Page</Link></li>
        <li><Link href="/services">Go to Service Page</Link></li>
      </ul>

    </div>
)
}
export default About