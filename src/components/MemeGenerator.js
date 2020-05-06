import React from "react"

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state={
            topText:"",
            bottomText:"",
            randImg:"https://i.imgflip.com/1bij.jpg",
            allMemesImg:[]
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch( "https://api.imgflip.com/get_memes").
            then(respone => respone.json()).
            then(respone => {
                const {memes} = respone.data
                // console.log(memes[0])
                this.setState({
                    allMemesImg: memes
                })
            })
        
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const randNumber= Math.floor(Math.random() * this.state.allMemesImg.length)
        const randMemeUrl= this.state.allMemesImg[randNumber].url
        this.setState({
            randImg : randMemeUrl
        })
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" value={this.state.topText} placeholder="Top Text" onChange={this.handleChange}
                    />
                    
                    <input type="text" name="bottomText" value={this.state.bottomText} placeholder="Bottom Text" onChange={this.handleChange}
                    />
                    
                    <button>Gen!</button>
                </form>
                <div className="meme">
                    <img src={this.state.randImg} alt="no image????"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}


export default MemeGenerator