export const sorter = (parametr,offers) => {
    if (parametr === "") {
        return offers
        
    }
    else if (parametr === "higher") {
        return offers.sort((a,b) => (b.price-b.discount_value)-(a.price-a.discount_value))
    }
    else if (parametr === "lower"){
        return offers.sort((a,b) => (a.price-a.discount_value)-(b.price-b.discount_value))
    }
    else if (parametr === "rating"){
        return offers.sort((a,b) => (b.rating)-(a.rating))

    }
    else if (parametr === "moreBranch"){
        return offers.sort((a,b) => (b.branches_num)-(a.branches_num))

    }
    else if (parametr === "responseTime"){
        return offers.sort((a,b) => (a.response_time)-(b.response_time))

    }

}