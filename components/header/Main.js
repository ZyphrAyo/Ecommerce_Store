import { HiMiniShoppingCart } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import styles from "./styles.module.scss"
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Main() {
    const {cart}=useSelector((state)=>({...state}))
  return (
    <div className={styles.main}>
        <div className={styles.main_container}>
            <div className={styles.search}>
                <input type="text" placeholder="Search   by   product,  catagory   or   collection  .  .  .  "/>
                <div className={styles.search_icon}>
                <CiSearch />
                </div>
            </div>
            <Link href="/cart" className={styles.cart}>    
                <HiMiniShoppingCart />    
                <span>{cart.length}</span>            
            </Link>
        </div>
    </div>
  )
}
