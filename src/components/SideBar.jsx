import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
// styles
import styles from "../styles/sidebar.module.scss";
const SideBar = ({setInstallments,installmentType}) => {
    const [open , setOpen] = useState(true)
    return (
        <aside className={styles.sidebar}>
            <div className={styles.headerContainer}>
                <h3>
                    اقساط
                </h3>
                <span>
                    <BiChevronDown onClick={()=>setOpen(!open) } className={open === true ? styles.open :styles.close}/>
                </span>
            </div>
            <div className={open === true ? "": styles.deactive}>
                <div className={styles.controler}>
                    <input  type="checkbox" name="installment" onChange={(e)=> setInstallments({...installmentType ,installment : !installmentType.installment}) } value={setInstallments.installment}/>
                    <label htmlFor="installment">اقساطی با چک</label>
                </div>
                <div  className={styles.controler}>
                    <input  type="checkbox" name="promissory" onChange={(e)=> setInstallments({...installmentType ,promissory : !installmentType.promissory}) } value={setInstallments.promissory}/>
                    <label htmlFor="promissory">اقساطی بدون چک</label>
                </div>
            </div>
        </aside>
    );
}
 
export default SideBar;