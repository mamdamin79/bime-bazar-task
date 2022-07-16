import { getOffers } from "../services/api"
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

export const offersContext = React.createContext();

const OffersContextProvider = ({children}) => {
    const [offers,setOffers] = useState([])
    useEffect(()=>{
        const callApi = async() => {
            setOffers(await getOffers());
        }
        callApi();
    },[])
    return (
        <div>
            <offersContext.Provider value={offers}>
                {children}
            </offersContext.Provider>
        </div>
    );
}
 
export default OffersContextProvider;