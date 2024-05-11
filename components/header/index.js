import Main from "./Main"
import Banner from "./banner"
import styles from "./styles.module.scss"
import Top from "./top.js"

export default function Header({country}) {
  return (
    <header className={styles.header}>
        <Banner/>
        <Top country={country}/>
        <Main/>
    </header>
  )
}
