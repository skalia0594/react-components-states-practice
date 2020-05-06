// https://www.fortnitehut.com/free-api?rarity=epic
// https://www.fortnitehut.com/free-api?type=outfit
// https://www.fortnitehut.com/free-api?leaked=yes
// https://www.fortnitehut.com/free-api?itemid=Ekp39W7

import React from "react"

class FortniteData extends React.Component{
    componentDidMount(){
        const proxyURL = "https://cors-anywhere.herokuapp.com/";
        const rarityData = fetch(proxyURL+"https://www.fortnitehut.com/free-api?rarity=epic").then(
            response => response.json()).then(data => data.items);
        const outfitData = fetch(proxyURL+"https://www.fortnitehut.com/free-api?type=outfit").then(
            response => response.json()).then(data => data.items);
        const leakedData= fetch(proxyURL+"https://www.fortnitehut.com/free-api?leaked=yes").then(
            response => response.json()).then(data => data.featured_items);
        const itemData= fetch(proxyURL+"https://www.fortnitehut.com/free-api?itemid=Ekp39W7").then(
            response => response.json()).then(data => data.results);

    }
    render(){
        return(
            <div></div>
        )
    }
}

// console.log(leakedData)
export default FortniteData