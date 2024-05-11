import styles from "./styles.module.scss"
import Link from "next/link";
import { signOut,signIn } from "next-auth/react";

export default function UserMenu({session}) {
  return (
    <div className={styles.menu}>
        <h1>Welcome Gang!</h1>
        {session ? (
        <div className={styles.flex}>
            <img src={session.user.image} className={styles.menu_img}/>
        <div className={styles.col}>
            <span>Welcome Back</span>
            <h3>{session.user.name}</h3>
            <span onClick={()=>signOut()}>Sign Out</span>
        </div>
        </div>
        ):(
            <div className={styles.flex}>
                <button className={styles.btn_primary}>Register</button>
                <button className={styles.btn_outlined} onClick={()=>signIn()}>Login</button>
            </div>
        )}
        <ul>
            <li><Link href="/profile">ACCOUNT</Link></li>
            <li><Link href="/profile/orders">MY ORDERS</Link></li>
            <li><Link href="/profile/messages">MESSAGE CENTER</Link></li>
            <li><Link href="/profile/adress">ADDRESS</Link></li>
        </ul>
    </div>
  )
}
