import React from "react"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import Joke from "./Joke"
import Product from "./Product"
import productsDetails from "../data/productsDetails"
import MemeGenerator from "./MemeGenerator"
import AutoComplete from "./AutoComplete"


// Auto complete functionality
class App extends React.Component{
    constructor(){
        super();
        this.state={
            rarityData:null,
            outfitData: null,
            leakedData: null,
            isLoading: true
        }
        
    }
    componentDidMount(){
        const proxyURL = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyURL+"https://www.fortnitehut.com/free-api?rarity=epic").then(
            response => response.json()).then(data => this.setState({ 
                rarityData : data.items,
                // isLoading: false
            }));
        fetch(proxyURL+"https://www.fortnitehut.com/free-api?type=outfit").then(
            response => response.json()).then(data => this.setState({ 
                outfitData : data.items,
                isLoading: false
            }));
        fetch(proxyURL+"https://www.fortnitehut.com/free-api?leaked=yes").then(
            response => response.json()).then(data => this.setState({ 
                leakedData : data.featured_items
            }));
        
    }
    render(){
        if(this.state.isLoading){
            return(<h1>Loading</h1>)
        }
        return(
             <AutoComplete rarityData={this.state.outfitData} />
        )
    }
}


// //App for MemeGenerator
// function App(){
//     return(
//         <div>
//             <Header />
//             <MemeGenerator />
//         </div>
//     )
// }





//FUNCTION-COmPONENT PRACTICE
// function App(){
//     const productComponents= productsDetails.map(item => <Product key={item.id} details={item} />)
//     return(
//         <div>
//            {/* <NavBar />
//            <MainContent />
//            <Footer /> */}
//            {/* <Joke details={{question:"1",punchline:"Hi"}}/>
//            <Joke details={{question:"2",punchline:"man"}}/>
//            <Joke details={{question:"3",punchline:"how"}}/>
//            <Joke details={{question:"",punchline:"are"}}/>
//            <Joke details={{question:"5",punchline:"you"}}/> */}
//            {productComponents}
//         </div>   
//     )
// }

//STATE AND PROPS PRACTICE
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             // name:"Shubham",
//             // age:25,
//             isLoggedIn:false,
//             isLoading:true,
//             character:null
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     componentDidMount(){
//         // this.setState({
//         //         isLoading:true
//         //     })
//         fetch("https://swapi.co/api/people/1/").
//             then(response => response.json()).
//             then(data =>{
//                 this.setState({
//                     character: data,
//                     isLoading: false
//                 })
//             })
//     }
//     handleClick(){
//         this.setState(previous => {
//             return {
//                 isLoggedIn : !previous.isLoggedIn
//             }
//         })
//     }
//     render(){
//         let name,message,height,buttonMessage="Sign In!";
//         if(this.state.isLoading){
//             return(
//                 <h1>Loading......</h1>
//             )
//         }
//         if(this.state.isLoggedIn){
//             name= "User name "+this.state.character.name
//             height= this.state.character.height+" cm long"
//             message= "Logged In user!"
//             buttonMessage="Sign out!"
//         }
//         else{
//             message="Welcome User"
//         }
        
//         return(
//             <p>
//                 <h1>{name}</h1>
//                 <h1>{height} </h1>
//                 <h2>{message}</h2>
//                 <button onClick={this.handleClick}>{buttonMessage}</button>
//             </p>
//         )
//     }
// }

//form practice
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             firstName:"",
//             lastName:"",
//             isFriendly: true,
//             gender:"",
//             location:""
//         }
//         this.handleChange=this.handleChange.bind(this);
//     }
//     handleChange(event){
//         const {name, value, type, checked} = event.target
//         type==="checkbox"? this.setState({
//             [name]: checked
//         }) : this.setState({
//             [name]: value
//         })
//     }
//     handleSubmit(event){

//     }
//     render(){
//         return(
//             <div style={{marginTop:100}}>
//                 <form onSubmit={this.handleSubmit}>
//                     <input 
//                     type="text" name="firstName" 
//                     value={this.state.firstName} 
//                     placeholder="First Name" 
//                     onChange={this.handleChange}
//                     />
//                     <br />
//                     <input 
//                     type="text" name="lastName" 
//                     value={this.state.lastName} 
//                     placeholder="Last Name" 
//                     onChange={this.handleChange}
//                     />
//                     <br/>
//                     <label>
//                         <input 
//                         type="checkbox" name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                         />
//                     isFriendly?</label>
//                     <br/>
//                     <label>
//                         <input 
//                         type="radio" name="gender"
//                         value="male"
//                         checked={this.state.gender==="male"}
//                         onChange={this.handleChange}
//                         />
//                     Male</label>
//                     <label>
//                         <input 
//                         type="radio" name="gender"
//                         value="female"
//                         checked={this.state.gender==="female"}
//                         onChange={this.handleChange}
//                         />
//                     Female</label> 
//                     <br />    
//                     <select name="location" onChange={this.handleChange} value={this.state.location}>
//                         <option value="Jalandhar">Jalandhar</option>
//                         <option value="Mumbai">Mumbai</option>
//                         <option value="Toronto">Toronto</option>    
//                     </select>    
//                     <br/>               
//                     <button>Submit!</button>
//                 </form>
//                 <p>{this.state.firstName} {this.state.lastName}</p>
//                 <p>You are {this.state.gender}</p>
//                 <p>You are from {this.state.location}</p>
//             </div>
//         )
//     }
// }



export default App