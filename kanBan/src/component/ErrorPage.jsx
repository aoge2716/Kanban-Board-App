import { Link } from "react-router-dom";
export default function ErrorPage() {
    return (
      <div>
        <h1>You are clearly lost Sir</h1>
        <Link to="/">
          <button>Try going backward</button>
        </Link>
        
      </div>
    );
  }