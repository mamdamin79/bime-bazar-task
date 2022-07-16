import { useContext, useState } from "react";
import { offersContext } from "../context/OffersContextProvider"
import Alert from "./Alert";
import Offer from "./Offer";
import Sort from "./Sort";
import { sorter } from "../utils/sorter"
// styles
import styles from "../styles/main.module.scss";

const Main = ({installmentType}) => {
    const offers = useContext(offersContext)
    const [parametr,setParametr] = useState("")
    console.log(offers)
    console.log(sorter(parametr,offers))
    
    return (
        <main className={styles.main}>
            <Alert/>
            <Sort parametr={parametr} setParametr={setParametr}/>
            {
                installmentType.promissory && installmentType.installment === true ? sorter(parametr,offers).filter(Offer => Offer.installment === true).filter(Offer => Offer.promissory === true).map(offer => <Offer key={offer.id} offerInfo={offer}/>) :
                installmentType.installment === true ? sorter(parametr,offers).filter(Offer => Offer.installment === true).map(offer => <Offer key={offer.id} offerInfo={offer}/>):
                installmentType.promissory === true ? sorter(parametr,offers).filter(Offer => Offer.promissory === true).map(offer => <Offer key={offer.id} offerInfo={offer}/>):
                sorter(parametr,offers).map(offer => <Offer key={offer.id} offerInfo={offer}/>)

            }
        </main>
    );
}
 
export default Main;