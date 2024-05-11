import styles from "./styles.module.scss"
import PacmanLoader from "react-spinners/PacmanLoader"
export default function DotLoaderSpinner({loading}) {
  return (
    <div className={styles.loader}>
        <PacmanLoader color="#99221e" loading={loading}/>
    </div>
  )
}
