import styles from"./styles.module.scss"

export default function Payment() {
  return (
    <div className={styles.footer_payment}>
        <h1>We Accept</h1>
        <div className={styles.footer_flexwrap}>
            <img src="../../../images/payment/visa.png"/>
            <img src="../../../images/payment/mastercard.png"/>
            <img src="../../../images/payment/paypal.png"/>
        </div>
    </div>
  )
}
