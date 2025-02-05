import { useState } from "react"
import "./List.css"

export default function ListItem(props){
 
    return (

        <div  key={props.id}>
            <ul>
                <li>title:{props.title}</li>
                <li>description: {props.description}</li>
                <li>assignee: {props.assignee}</li>
                <li>priority: {props.priority}</li>
                <li>created date: {props.createdDate}</li>
                <li>status:{props.status}</li>
            </ul>
        </div>
            
    )
}