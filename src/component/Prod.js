import React from 'react'

const Prod = (props) => {
    return (
        <div onClick={()=>props.handelData(props.Prod.name,props.Prod.description)}>
           <img src={props.Prod.image} alt="image1" />
           <h2 className="title">{props.Prod.name}</h2>
           <h2 className="title">{props.Prod.rating}</h2>
           <h2 className="title">{props.Prod.date}</h2>
           <h2 className="title">{props.Prod.type}</h2>
           <p className="title">{props.Prod.description}</p>

        </div>
    )
}

export default Prod
