import styles from "../styles/sort.module.scss";
const Sort = ({parametr,setParametr}) => {
    const clickHandler = (e) => {
        console.log(e.target.name)
        setParametr(e.target.name)
    }
    return (
        <div className={styles.sortBar}>
            <h3>مرتب سازی بر اساس :</h3>
            <div> 
                <button onClick={clickHandler} name="lower" className={parametr === "lower" ? styles.active : styles.deactive}>ارزان ترین</button>
                <button onClick={clickHandler} name="higher" className={parametr === "higher" ? styles.active : styles.deactive}>گران ترین</button>
                <button onClick={clickHandler} name="rating" className={parametr === "rating" ? styles.active : styles.deactive}>امتیاز</button>
                <button onClick={clickHandler} name="moreBranch" className={parametr === "moreBranch" ? styles.active : styles.deactive}>بیشترین شعب پرداخت</button>
                <button onClick={clickHandler} name="responseTime" className={parametr === "responseTime" ? styles.active : styles.deactive}>کوتاه ترین زمان پاسخگویی</button>
            </div>
        </div>
        
    );
}
 
export default Sort;