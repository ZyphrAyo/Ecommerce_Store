import Link from "next/link"
import styles from"./styles.module.scss"
export default function Newsletter() {

  return (
    <div className={styles.footer_newsletter}>
        <h3>Sign up for our newsletter</h3>
        <div className={styles.footer_flex}>
            <input type="text" placeholder="Your Email Address"/>
            <button className={styles.btn_primary}>SUBSCRIBE</button>
        </div>
        <p>By clicking the Subscribe button, you are agreeing to {""}
        <a><Link href="">our Privacy & Cookie Policy</Link></a>
         </p>
    </div>
  )
}
