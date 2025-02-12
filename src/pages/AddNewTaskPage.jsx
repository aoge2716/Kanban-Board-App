import AddNewTask from "../component/AddNewTask";
export default function AddNewTaskPage(props){
    return(
        <div className="home">
            <AddNewTask setNewTask={props.setNewTask}/>
        </div>
    )
}