import styles from "./styles.module.scss"
import { FaHeart,FaCaretDown } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";
import { useSession } from "next-auth/react";


export default function top({country}) {
    const { data: session } = useSession()
    const[visible,setVisible]=useState(false)
    console.log(session)
  return (
    <div className={styles.top}>
        <div className={styles.top_container}>
            <div></div>
            <ul className={styles.top_list}>
                <div className={styles.top_logo}>
                <Link href="/">
                <li>
                    <img src="./logo.img"/>
                </li>
                </Link>
                </div>
                <li>
                    <Link href="">
                    <span>TRENDINGS</span>
                    </Link>
                </li>
                <li>
                    <Link href="">
                    <span>HELP</span>
                    </Link>
                </li>
                <li>
                    <Link href="">
                    <span>SERVICES</span>
                    </Link>
                </li>
                <li>
                <div className={styles.WL}>
                    <Link href="/profile/wishlist">
                    <FaHeart />
                    </Link>
                    </div>
                </li>
                    <li
                    className={styles.li}
                    onMouseOver={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}>
               {
                session? <li>
                <div className={styles.flex}>
                {/* <img src="./user.img"/> */}
                <img src={session.user.image }/>
                <p className={styles.name}>{session.user.name}</p>
                <FaCaretDown />
                </div>
            </li>: <li>
                    <div className={styles.flex}>
                    <RiAccountPinCircleFill />
                    </div>
                </li>
               }
               {
                visible && <UserMenu session={session}/>
               }
               </li>
                <li>
                    <img src={country.flag}/>
                </li>
            </ul>
        </div>
    </div>
  )
}
