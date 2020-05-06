import React from "react"
import items from "../data/items"

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            suggestion:[],
            text:"",
            itemData: null,
            isLoading: true,
        }
        this.rarityData= props.rarityData.map((x) => [x.name,x.ourid]);  
        
        this.handleChange= this.handleChange.bind(this);
        this.renderSuggestion= this.renderSuggestion.bind(this);
    }
    
    handleChange(event){
        const {name,value,id} = event.target
        let list=[];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`,'i')
            list = this.rarityData.sort().filter( v => regex.test(v))
        }
        this.setState({
            [name]: list,
            text:value,
            isLoading: true    
        })
    }
    selectSuggestion(sugg){
        this.setState({
            text:sugg[0],
            suggestion:[]
        })
        const proxyURL = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyURL+"https://www.fortnitehut.com/free-api?itemid="+ sugg[1]).then(
            response => response.json()).then(data => this.setState({ 
                itemData : data.results,
                isLoading : false
            }));
        
    }
    renderSuggestion(){
        let suggestions = this.state.suggestion;
        if(suggestions.length ===0)
            return null;
        return(
            <div className="autocomplete-items"> 
                {suggestions.map((sugg) => <div key={sugg[1]} id={sugg[1]} onClick={() => this.selectSuggestion(sugg)}>{sugg[0]}</div>)}
            </div>
        )   
        
    }
    render(){
        let image="", alt="";
        if(!this.state.isLoading){
            console.log(this.state.itemData)
            image = this.state.itemData[0].picture.standard  //large_png
        }
        
        return(
           <div>
                <div className="wrap">
                    <h1 style={{marginLeft:120}}>FORTNITE!</h1>
                    
                        <div className="search">
                            <input autoComplete= "off" type="text" name="suggestion" value={this.state.text} placeholder="Search your item rarity or outfit" onChange={this.handleChange} className="searchTerm"/>
                            {this.renderSuggestion()}
                        </div>
                        
                </div>
                <img src={image}/>
                
           </div>
        )
    }
    
}

export default AutoComplete