import styles from"./styles.module.scss"

import { FaTwitter,FaInstagramSquare,FaFacebookF } from "react-icons/fa";

export default function Socials() {
  return (
    <div className={styles.footer_socials}>
        <section>
            <h2>STAY CONNECTED</h2>
            <ul>
                <li>
                    <a href="">
                    <FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href="">
                    <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="">
                    <FaInstagramSquare />
                    </a>
                </li>
                
            </ul>
        </section>
    </div>
  )
}
