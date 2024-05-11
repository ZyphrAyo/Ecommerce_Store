import styles from "./styles.module.scss"
import { FaAnglesRight } from "react-icons/fa6";
export default function CircledIconBttn({type,text,icon}) {
  return (
    <button className={styles.button} type={type}>{text}
    <div className={styles.svg_wrap}>
    <FaAnglesRight />
    </div>
    </button>
  )
}
