import React from "react"

function Joke(props){
   return(
        <div>
        <b style={{display: !props.details.question && "none"}}>{props.details.question}:</b> 
        <p style={{color: !props.details.question && "red"}}>{props.details.punchline}</p>
        </div>
    )
}

export default Joke