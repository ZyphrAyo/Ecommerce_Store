import Link from "next/link"
import styles from"./styles.module.scss"
import { IoLocation } from "react-icons/io5";

export default function Copyright({country}) {
  return (
    <div className={styles.footer_copyright}>
      <section>©2023 WebsiteName all rights reserved</section>
      <section>
        <ul>
        {
          data.map((link)=>(
          <li>
            <Link href={link.link}>
              {link.name}
            </Link>
          </li>
            ))
        }
        <li>
          <a>
          <IoLocation /> {country.name}
          </a>
        </li>
        </ul>
      </section>
    </div>
  )
}

const data=[
  {
    name:"Privacy Center",
    link:"",
  },
  {
    name:"Privacy & Cookie Policy",
    link:"",
  },{
    name:"Manage Cookies",
    link:"",
  },{
    name:"Terms & Conditions",
    link:"",
  },
  {
    name:"Copyright Notice",
    link:"",
  },
]