
import Link from "next/link"
import styles from"./styles.module.scss"

export default function Banner() {
  return (
    <div className={styles.banner}>
    <div className={styles.banner_container}>
        <div></div>
        <ul className={styles.banner_list}>
            <li>
              <Link href="/browse"> 
                <span>Offers</span>
              </Link> 
            </li>
            <li>
              <Link href="">
                <span>Gangbook</span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span>Download App</span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span>Become an Homie</span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span>Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span>Track Order</span>
              </Link>
            </li>
        </ul>
    </div>
</div>
  )
}
