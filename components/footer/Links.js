import Link from "next/link"
import styles from"./styles.module.scss"

export default function Links() {
  return (
    <div className={styles.footer_links}>
        {
            links.map((link,i)=>(
                <ul>
                    {
                        i===0 ?(<img src="../../../logo.png"/>):(<b>{link.heading}</b>)
                    }
                    {
                        link.links.map((link)=>(
                            <li>
                                <Link href={link.link}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            ))
        }
    </div>
  )
}
const links=[
    {
        heading:"WebsiteName",
        links:[
            {
                name:"About Us",
                link:"",
            },
            {
                name:"Contact us",
                link:"",
            },
            {
                name:"Social Responsibility",
                link:"",
            },
            
            {
                name:"",
                link:"",
            },
        ],
    },
    {
        heading:"Help",
        links:[
            {
                name:"Shipping Info",
                link:"",
            },
            {
                name:"Social Responsibility",
                link:"",
            },
            {
                name:"Returns",
                link:"",
            },
        ],
    },
    {
        heading:"Support",
        links:[
            {
                name:"How to Order",
                link:"",
            },
            {
                name:"How to Track",
                link:"",
            },
            {
                name:"Size Guide",
                link:"",
            },
        ],
    },
    {
        heading:"Customer Service",
        links:[
            {
                name:"Terms and Conditions",
                link:"",
            },
            {
                name:"Customers Transactions",
                link:"",
            },
            {
                name:"Take a Survey",
                link:"",
            },
        ],
    },
]

