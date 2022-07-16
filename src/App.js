import { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import AlertContextProvider from "./context/AlertContextProvider";
import OffersContextProvider from "./context/OffersContextProvider";
// styles
import styles from "./styles/app.module.scss";
function App() {
  const [installmentType , setInstallments] = useState({
    promissory:false,
    installment:false
  })
  return (
    <AlertContextProvider>
        <OffersContextProvider>
          <div className={styles.app}>
            <SideBar setInstallments={setInstallments} installmentType={installmentType}/>
            <Main installmentType={installmentType}/>
          </div>
      </OffersContextProvider>
    </AlertContextProvider>
  
  );
}

export default App;
