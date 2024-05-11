import Footer from "@/components/footer";
import styles from "../styles/Home.module.scss"
import Header from "@/components/header";
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"
import Main from "@/components/home/main";

export default function Home({country}) {
  const { data: session } = useSession()
  console.log(session)
 
  return (
    <>
    <div className={styles.container}>
      <Header country={country}/>
      <div className={styles.home}>
        <div className={styles.contain}>
          <Main/>
        </div>
      </div>
      <Footer country={country}/>
    </div>
    </>
  );
}
// npm i axios -helps send req to an api
export async function getServerSideProps(){
  let data = await axios
  .get("https://api.ipregistry.co/?key=uj5sf6znhgeumcqa")
  .then((res)=>{
    return res.data.location.country
  })
  .catch((err)=>{
    console.log(err)
  })
  return{
    props:{
      // uncomment it in production mode
      // country:{ flag:data.flag.emojitwo ,name: data.name, },
      country:{ flag:"https://cdn.ipregistry.co/flags/emojitwo/in.svg" ,name: "India", },

    }
  }
}