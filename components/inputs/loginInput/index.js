import styles from "./styles.module.scss"
import { FaRocket } from "react-icons/fa6";
import { SiVault } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";
import { ErrorMessage, useField } from "formik";

export default function LoginInput({icon,placeholder,...props}) {
  const[feild,meta]=useField(props)
  return (
    <div className={`${styles.input} ${meta.touched && meta.error ? styles.error : ""}`}>
        {
            icon=="user" ? (<FaUserAstronaut />) :icon=="email" ? (<FaRocket />)
            : icon=="password"?(<SiVault />):("")
        }
        <input type={feild.type} 
        name={feild.name}
        placeholder={placeholder}
        {...feild}
        {...props}
        />
        {
          meta.touched && meta.error && <div className= {styles.error_popup}>

            <span></span>
            <ErrorMessage name={feild.name}/>
          </div>
        }
    </div>
  )
}
