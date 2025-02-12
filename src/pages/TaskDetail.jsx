import { Link, useParams } from "react-router-dom";


export default function TaskDetail(props) {
  const { taskId } = useParams();

  const task = props.taskArr.find((element) => {
    return element.id === taskId;
  });

  let imgSrc, imgAlt;

  switch(task.status){
    case("Completed"):
      imgSrc = "../../public/image/status/completed.gif";
      imgAlt = "Task Completed";
      break;
    case("In Progress"):
      imgSrc = "../../public/image/status/in_progress.gif";
      imgAlt = "Task In Progress";
      break;
    case("Not Assigned"):
      imgSrc = "../../public/image/status/not_assigned.gif";
      imgAlt = "Task Not Assigned";
      break;
  }
   
  
  return (
    <div key={task.id} className="home" id="taskDetail">
      <h1>Task Detail Page</h1>
      <div className="task" style={{width:"60%"}}>
        <ul>
          <li>Title: {task.title}</li>
          <li>Description: {task.description}</li>
          <li>Assignee: {task.assignee}</li>
          <li>Priority: {task.priority}</li>
          <li>Created Date: {task.createdDate}</li>
          <li>Status: {task.status}</li>
          <img src={imgSrc} alt={imgAlt}/>
          <br/>
          <Link to={`/edit/${taskId}`}>
            <button >Edit</button>
          </Link>
          
          <Link to="/">
            <button>Back</button>
          </Link>
        </ul>
      </div>
      
    </div>
  );
}
