import { useState } from "react"
import "./List.css"

export default function ListItem(props){
 
    return (

        <div className="tasks" key={props.id}>
            <ul>
                <li>title:{props.title}</li>
                <li>description: {props.description}</li>
                <li>assignee: {props.assignee}</li>
                <li>priority: {props.priority}</li>
                <li>created date: {props.createdDate}</li>
                <li>status:{props.status}
                    <img src={`${props.status==="Done"
                    ? "./src/assets/image/status/heavy_check_mark.png"
                    : "./src/assets/image/status/x.png"}`} alt="" />
                </li>
                <button onClick={()=>clicked(props.id)}>delete</button>
            </ul>
        </div>
            
    )
}