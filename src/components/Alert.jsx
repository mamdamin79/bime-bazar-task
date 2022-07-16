import { useContext } from "react";
import { alertsContext } from "../context/AlertContextProvider"
// styles
import styles from "../styles/alert.module.scss";
const Alert = () => {
    const alert = useContext(alertsContext);
    console.log(alert);
    return (
        <div className={styles.alert}>
            <p >
                {
                    alert.length > 0  && alert[0]
                }
            </p>
        </div>
    );
}
 
export default Alert;