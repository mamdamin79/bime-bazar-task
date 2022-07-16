// styles
import styles from "../styles/offer.module.scss";
const Offer = ({offerInfo}) => {
    console.log(offerInfo);
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹',];
    
    return (
        <div className={styles.container}> 
            <div className={styles.offer}>
                <div className={styles.logoContainer}>
                    <img src={offerInfo.company_logo}  alt="company_logo" />
                    <p >{offerInfo.company_name}</p>
                </div>
                <div>
                    <h4  className={styles.heading}>
                        شعبه پرداخت
                    </h4>
                    <p>
                        {
                        offerInfo.branches_num ? offerInfo.branches_num.toString().split("").map(x=> farsiDigits[x]).join("") : <span>نامشخص</span>
                        }
                        {
                            offerInfo.branches_num && <span>شعبه</span>
                        }
                    </p>
                </div>
                <div>
                    <h4 className={styles.heading}>
                        رتبه رضایتمندی
                    </h4>
                    <p >
                        {
                            offerInfo.rating ? offerInfo.rating.toString().split("").map(x=> farsiDigits[x]).join("") : <span>نامشخص</span>
                        }
                    </p>
                </div>
                <div>
                    <h4 className={styles.heading}>
                        زمان پاسخگویی
                    </h4>
                    <p >
                        {
                            offerInfo.response_time ? offerInfo.response_time.toLocaleString().split("").map(x=> farsiDigits[x]).join("") : <span>نامشخص</span>
                        }
                        {
                            offerInfo.response_time ? <span>روزکاری</span> : ""
                        }
                    </p>
                </div>
                <div>
                    <h4 className={styles.heading}>
                    توانگری مالی    
                    </h4>
                    <p>
                        ۵ از ۵
                    </p>
                </div>
                <div>
                    <div className={styles.priceContainer}>
                        <p className={styles.discount} >
                            {
                                offerInfo.discount_value ? offerInfo.discount_value.toLocaleString().split('').map(x => {
                                    if(x === ","){
                                        return  ","
                                    }
                                    else{
                                        return farsiDigits[x]
                                    }
                                }).join(""): ""
                            }
                        </p>
                        <p>
                            {
                                offerInfo.discount_value ? (offerInfo.price - offerInfo.discount_value).toLocaleString().split('').map(x => {
                                    if(x === ","){
                                        return  ","
                                    }
                                    else{
                                        return farsiDigits[x]
                                    }
                                }).join("") : offerInfo.price.toLocaleString().split('').map(x => {
                                    if(x === ","){
                                        return  ","
                                    }
                                    else{
                                        return farsiDigits[x]
                                    }
                                }).join("")
                            }
                        </p>
                    </div>
                <button>سفارش</button>
                </div>
            </div>
            <div>
                {
                    offerInfo.installment === true && <span className={styles.badge}>قسطی با چک</span>
                }
            </div>
        </div>
    );
}
 
export default Offer;