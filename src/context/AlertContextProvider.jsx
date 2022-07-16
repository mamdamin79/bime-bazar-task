import { useEffect,useState } from "react";
import { getaAlerts } from "../services/api"
import React from 'react';
export const alertsContext = React.createContext()
const AlertContextProvider = ({children}) => {
    const [alert,setAlert] = useState([])
    useEffect(()=>{
        const callApi = async () => {
            setAlert(await getaAlerts());
        }
        callApi()
    },[])
    return (
        <div>
            <alertsContext.Provider value={alert}>
                {children}
            </alertsContext.Provider>
        </div>
    );
}
 
export default AlertContextProvider;