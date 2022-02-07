import Card from "../components/shared/Card";
import { Link} from "react-router-dom";

function About() {
  return (
    <div>
      <Card>
        <h1>About</h1>
        <p>hi this is a first project i done in react js...</p>
        <p>Version 1.0.0</p>
        <Link to="/">Back To Home</Link>
      </Card>
    </div>
  );
}

export default About;
