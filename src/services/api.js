export const getOffers = async ()=>{
    const response = await fetch("http://localhost:8000/offers")
    const data = response.json();
    return data
}
export const getaAlerts = async ()=>{
    const response = await fetch("http://localhost:8000/alerts")
    const data = response.json();
    return data
}